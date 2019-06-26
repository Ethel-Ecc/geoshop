import requests
import json
from flask import Flask, Response, render_template


app = Flask(__name__, static_url_path='/static')


@app.route('/', methods=('GET',))
def get_all_dataset():
    res = {}
    all_res = {}
    url_base = 'http://127.0.0.1:5000/api/3/action/'
    url_action = 'package_list'

    try:
        url = url_base+url_action
        req = requests.get(url)
        res = Response(req.text,
                       status=req.status_code,
                       content_type=req.headers['Content-Type']
                       ).data.decode()
    except requests.exceptions.RequestException as e:
        pass

    # try:
    #     all_res = requests.get(url_base+url_action)
    #     all_res = Response(all_res.text,
    #                        status=all_res.status_code,
    #                        content_type=all_res.headers['Content-Type']
    #                        ).data.decode()
    # except requests.exceptions.RequestException as e:
    #     pass
    # all_res = json.loads(all_res)

    res = json.loads(res)

    return render_template('homepage.html', res=res, one=50)


# @app.route('/search', methods=('GET', 'POST'))
# def search_dataset():
#     res_search = {}
#     try:
#         url = 'http://127.0.0.1:5000/api/3/action/package_list'
#         req = requests.get(url)
#         res_search = Response(req.text,
#                               status=req.status_code,
#                               content_type=req.headers['Content-Type']).data.decode()
#     except requests.exceptions.RequestException as e:
#         pass
#     res_search = json.loads(res_search)
#     assert res_search['success'] is True
#     return render_template('search.html', res_search=res_search)
#
#
# @app.route('/org')
# def get_all_organizations():
#     try:
#         url = 'http://127.0.0.1:5000/api/3/action/group_list'
#         org = requests.get(url)
#         org = Response(org.text,
#                        status=org.status_code,
#                        content_type=org.headers['Content-Type']).data.decode()
#     except requests.exceptions.RequestException as e:
#         pass
#     org = json.loads(org)
#     assert org['success'] is True
#     return render_template('org.html', org=org)


if __name__ == '__main__':
    app.run(debug=True)
