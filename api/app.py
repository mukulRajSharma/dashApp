from flask import Flask, request, jsonify
from werkzeug.wrappers import response
app = Flask(__name__)

trusted = []

@app.route('/')
def hello():
    return 'hihi, World!'

@app.route('/addTrusted', methods=['POST'])
def addTrusted():
    data = request.get_json()
    global trusted

    tmp_dict = data['rows']

    for t in tmp_dict:
        t['author'] = data['user']
        trusted.append(t) 

    print(trusted)

    response = {'status':'added to trust list'}
    return response, 200

@app.route('/getTrusted')
def getTrusted():
    return jsonify(trusted)

if __name__ == "__main__":
    app.run(debug=True)