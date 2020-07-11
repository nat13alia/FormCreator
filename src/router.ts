export class Router {
  static getParam(key: string) {
    // metoda powinna zwracać wartość parametru GET o wskazanym kluczu. Wykorzystaj kod:
    const query: string = window.location.search.substr(1);
    const urlParams = new URLSearchParams(query);
    const id = urlParams.get('id');
  }
}