from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as genai
import json
from dotenv import load_dotenv
import os

load_dotenv()

def ConsultaGeminiAPI(LocalDePartida, CidadesVisita, DuracaoDias): 
    api_key = os.getenv("GENAI_API_KEY")
    genai.configure(api_key=api_key)

    # Set up the model
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 0,
        "max_output_tokens": 8192,
        "response_mime_type": "application/json",
    }

    safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    ]

    model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                                generation_config=generation_config,
                                safety_settings=safety_settings)


    prompt_parts = [
    f"Baseado nesse input:\n{{\n    \"Local_Partida\" : \"{LocalDePartida}\",\n    \"Cidades_Visita\" : [{CidadesVisita}],\n    \"Duração_Dias\" : [{DuracaoDias}],\n}}\n\nGere um output em jason como esse, a ordem dos locais deve ser otimizada pela distancia:\n{{\n    \"cidades_a_visitar\": [\n      {{\n        \"nome_da_cidade\": \"Roma\",\n        \"tempo_na_cidade\": 4,\n        \"acomodações\": [\n          \"Hotel Eden\",\n          \"The St. Regis Rome\",\n          \"J.K. Place Roma\",\n          \"Hotel Vilòn\",\n          \"Portrait Roma\"\n          ],\n        \"restaurantes\": [\n          \"La Pergola\",\n          \"Il Pagliaccio\",\n          \"Aroma Restaurant\",\n          \"Imàgo\",\n          \"Metamorfosi\"\n          ],\n        \"passeios_e_atividades\": [\n          {{\n            \"dia\": 1,\n            \"passeio\": \"Coliseu e Fórum Romano: Explore a história antiga de Roma.\"\n          }},\n          {{\n            \"dia\": 2,\n            \"passeio\": \"Museu do Vaticano e Capela Sistina: Admire obras-primas da arte renascentista.\"\n          }},\n          {{\n            \"dia\": 3,\n            \"passeio\": \"Fontana di Trevi e Panteão: Jogue uma moeda na fonte e maravilhe-se com a arquitetura do Panteão.\"\n          }},\n          {{\n            \"dia\": 4,\n            \"passeio\": \"Galeria Borghese e Jardins: Descubra esculturas e pinturas de Bernini e Caravaggio.\"\n          }}\n        ]\n      }},\n    ],...\n}}\n\n",
    ]
    response = model.generate_content(prompt_parts)
    response_text = response.text
    response_data = json.loads(response_text)
    print(response_data)
    return response_data


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_data():
    LocalDePartida = request.args.get('LocalDePartida')
    CidadesVisita = request.args.get('CidadesVisita').split(', ')
    DuracaoDias = list(map(int, request.args.get('DuracaoDias').split(',')))

    return jsonify(ConsultaGeminiAPI(LocalDePartida, CidadesVisita, DuracaoDias))

if __name__ == '__main__':
    app.run()