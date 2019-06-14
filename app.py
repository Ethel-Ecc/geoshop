import requests
import json
from flask import Flask, request, Response, render_template, jsonify


app = Flask(__name__)


@app.route('/', methods=('GET',))
def get_all_dataset():
    res = {}
    try:
        url = 'http://127.0.0.1:5000/api/3/action/package_list'
        req = requests.get(url)
        res = Response(req.text,
                       status=req.status_code,
                       content_type=req.headers['Content-Type']
                       ).data.decode()
    except requests.exceptions.RequestException as e:
        pass

    res = json.loads(res)
    return render_template('homepage.html', res=res)


@app.route('/search', methods=('GET',))
def search_dataset():
    res_search = {}
    search_val = ""
    try:
        url = 'http://127.0.0.1:5000/api/3/action/package_search?q='+search_val
        req = requests.get(url)
        res_search = Response(req.text,
                              status=req.status_code,
                              content_type=req.headers['Content-Type'])\
            .data.decode()
    except requests.exceptions.RequestException as e:
        pass

    res_search = json.loads(res_search)
    return render_template('homepage.html', res_search=res_search)
#
# @app.route('/get_all_organizations')
# def get_all_organizations():
#     get_all_organizations = requests.get('http://127.0.0.1:5000/api/3/action/group_list')
#     return Response(get_all_organizations.text)
#
#
# @app.route('/get_all_tags')
# def get_all_tags():
#     get_all_tags = requests.get('http://127.0.0.1:5000/api/3/action/group_list')
#     return Response(get_all_tags.text)


if __name__ == '__main__':
    app.run(debug=True)
