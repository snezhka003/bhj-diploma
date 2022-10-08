/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */

 class Sidebar {

  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  
  static initToggleButton() {
    document.querySelector(".sidebar-toggle").addEventListener('click', () => {
        document.body.classList.toggle('sidebar-open');
        document.body.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_register').addEventListener('click', () => App.getModal('register').open());
    document.querySelector('.menu-item_login').addEventListener('click', () => App.getModal('login').open());
    document.querySelector('.menu-item_logout').addEventListener('click', () => {
      let callback = (error, response) => {
        if (response.success) {
          App.setState('init');
        };
      };
      User.logout(callback);
    });
  }
}