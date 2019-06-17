# Internet applications developent
## Lab work №4 (front)
Frontend for a lab work for internet application development course
## Задание
Разработать приложение, которое осуществляет проверку попадания точки в заданную область на координатной плоскости с использованием следующих технологий:
* Уровень back-end должен быть основан на Spring. 
* Уровень front-end должен быть построен на React + Redux (необходимо использовать ES6 и JSX) с использованием набора компонентов PrimeReact 
* Взаимодействие между уровнями back-end и front-end должно быть организовано посредством REST API. 

Приложение по-прежнему должно включать в себя 2 страницы - стартовую и основную страницу приложения. Обе страницы приложения должны быть адаптированы для отображения в 3 режимах: 
* "Десктопный" - для устройств, ширина экрана которых равна или превышает 1192 пикселей. 
* "Планшетный" - для устройств, ширина экрана которых равна или превышает 759, но меньше 1192 пикселей. 
* "Мобильный"- для устройств, ширина экрана которых меньше 759 пикселей. 

Стартовая страница должна содержать следующие элементы: 
* "Шапку", содержащую ФИО студента, номер группы и номер варианта. 
* Форму для ввода логина и пароля. Информация о зарегистрированных в системе пользователях должна храниться в отдельной таблице БД (пароль должен храниться в виде хэш-суммы). Доступ неавторизованных пользователей к основной странице приложения должен быть запрещён. 

Основная страница приложения должна содержать следующие элементы: 
* Набор полей ввода для задания координат точки и радиуса области в соответствии с вариантом задания: Dropdown {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'} для координаты по оси X, Slider (-3 ... 5) для координаты по оси Y, и Dropdown {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'} для задания радиуса области. Если поле ввода допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки или отрицательный радиус), то приложение должно осуществлять их валидацию. 
* Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. 
* Таблицу со списком результатов предыдущих проверок. 
* Кнопку, по которой аутентифицированный пользователь может закрыть свою сессию и вернуться на стартовую страницу приложения. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
