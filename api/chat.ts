export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Eres un asistente virtual experto en plantas carnívoras para Biofauces, una tienda y comunidad especializada.
Tu función es ayudar a los visitantes con preguntas sobre:
- Cultivo y cuidados de plantas carnívoras
- Identificación y características de especies
- Solución de problemas de cultivo
- Recomendaciones para principiantes

Especies que conoces en detalle: Dionaea muscipula (Venus atrapamoscas), Nepenthes (lowland, intermediate y highland), Sarracenia, Drosera, Pinguicula, Heliamphora, Cephalotus follicularis, Brocchinia reducta.

REGLAS:
- Responde SIEMPRE en el mismo idioma que el usuario (español o inglés).
- Sé conciso, preciso y amigable. Máximo 3-4 frases por respuesta.
- Si la pregunta no está relacionada con plantas carnívoras, redirige amablemente al tema.
- No inventes información; si no sabes algo, dilo honestamente.`;

export default async function handler(req: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  const apiKey = (globalThis as any).process?.env?.OPENAI_API_KEY
    ?? (globalThis as any).OPENAI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: corsHeaders,
    });
  }

  let body: { message?: string; history?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const { message, history = [] } = body;

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'Message is required' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  // Keep last 10 messages for context window efficiency
  const trimmedHistory = history.slice(-10).filter(
    (m) => m.role === 'user' || m.role === 'assistant'
  );

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 600,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...trimmedHistory,
          { role: 'user', content: message.trim().slice(0, 1000) },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI API error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: 'Error calling AI service' }),
        { status: 502, headers: corsHeaders }
      );
    }

    const data = await response.json() as {
      choices: { message: { content: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content ?? 'Lo siento, no pude generar una respuesta.';

    return new Response(JSON.stringify({ reply }), { headers: corsHeaders });
  } catch (err) {
    console.error('Chat handler error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    );
  }
}
