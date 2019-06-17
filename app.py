import requests
import json
from flask import Flask, request, Response, render_template, jsonify


app = Flask(__name__, static_url_path='/static')


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


@app.route('/search', methods=('GET', 'POST'))
def search_dataset():
    res_search = {}
    search_val = 'norway'
    try:
        # url = 'http://127.0.0.1:5000/api/3/action/package_search?q='+search_val # UNIQUE SEARCH QUERY
        url = 'http://127.0.0.1:5000/api/3/action/package_list'
        req = requests.get(url)
        res_search = Response(req.text,
                              status=req.status_code,
                              content_type=req.headers['Content-Type']).data.decode()
    except requests.exceptions.RequestException as e:
        pass

    res_search = json.loads(res_search)

    return render_template('search.html', res_search=res_search)


@app.route('/org')
def get_all_organizations():
    try:

        url = 'http://127.0.0.1:5000/api/3/action/group_list'
        org = requests.get(url)
        org = Response(org.text,
                       status=org.status_code,
                       content_type=org.headers['Content-Type']).data.decode()
    except requests.exceptions.RequestException as e:
        pass

    org = json.loads(org)

    return render_template('org.html', org=org)


# @app.route('/tags')
# def get_all_tags():
#     get_all_tags = requests.get('http://127.0.0.1:5000/api/3/action/group_list')
#     return Response(get_all_tags.text)


if __name__ == '__main__':
    app.run(debug=True)
