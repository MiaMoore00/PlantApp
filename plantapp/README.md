<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MiaMoore00/PlantApp.git">
    <img src="/src/Logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BLOOM</h3>

  <p align="center">
    When searching APIs to utilize for this project we discovered pretty cool Plant APIs that provided extensive information on specific plants. We all gravitated towards this as we all in our own ways love plants. We thought of how we could utilize this API and create something useful for the plant lovers out there. 

Thus, Bloom was born. Bloom is an app that allows you to make your own bloom profile and with this profile, you can search different plants by name to get information about and how to care for plants. You can identify plants near you by uploading a picture to the app and it provides information on all similar plants. 

You can get a health assessment on your home plants by just uploading a picture. And you can add your favorite plants to your favorites page for your reference later. Overall, bloom is for all: Plant lovers, plant newbies, and those who are just curious about the world around them.


   <a href="https://trello.com/invite/b/rT9xgp14/ATTIb80e0e869944dc8653051157138da739D454315E/plantapp"> See our project board here (Via Trello)</a>
    <br />
    <a href="https://github.com/MiaMoore00/PlantApp.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MiaMoore00/PlantApp.git">View Demo</a>
    ·
    <a href="https://github.com/MiaMoore00/PlantApp.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/MiaMoore00/PlantApp.git/issues">Request Feature</a>
  </p>
</div>




<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="/src/Logo.png" alt="Logo" width="80" height="80">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![tailwind][tailwind.js]][tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://api.plant.id](https://api.plant.id) & [https://perenual.com](https://perenual.com)
2. Clone the repo
   ```sh
   git clone https://github.com/MiaMoore80/PlantApp.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your own key on the api site

5. make sure sequelize is running on your local hard drive. To make sure your migrations for this project are running properly make sure to run the following code:
 ```sh
 sequelize db:create
 sequelize db:migrate
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<h2>See Below for snippets from the Bloom Site</h2>

<h3>Registration Page</h3>
<img src="/public/images/registration.jpg"></img>
<br>
<h3>Login Page</h3>
<img src="/public/images/login.jpg"></img>
<br>
<h3>Home Page</h3>
<img src="/public/images/home.jpg"></img>
<br>
<h3>Favorites Page</h3>
<img src="/public/images/favorites.jpg"></img>
<br>
<h3>Plant ID Page</h3>
<img src="/public/images/plantId1.jpg"></img>
<img src="/public/images/plantId2.jpg"></img>
<br>
<h3>Plant Health Assessment Page</h3>
<img src="/public/images/plantHealth1.jpg"></img>
<img src="/public/images/plantHealth2.jpg"></img>

<h2 href="">Click here for video demo of site</h2>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- [Register.jsx] Create your user account. Once complete the site will redirect you to the Login page.
- [Login.jsx] Login to the site with your user account. Once logged in, you will be redirected to the home page.
- [home.jsx] Home screen that gives options on navigating site. It also includes a search bar for more info on plants you are curious about. On this page you can also add plants to your favorites.
- [Favorites.jsx] You can view your favorites on this page.
- [PlantId.jsx] Upload image to get general information on your plant.
- [PlantHealth.jsx] Upload image to get a full health assessment on your plant.


See the [open issues](https://github.com/MiaMoore80/PlantApp/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact


Project Link: [https://github.com/MiaMoore80/PlantApp](https://github.com/MiaMoore80/PlantApp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Daneen Mays](github.com/DaneenM)
* [Destiny Simpkins](github.com/destiny1210)
* [Lauren Whitted](github.com/LWhitted)
* [Mia Moore](gitthub.com/MiaMoore00)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/MiaMoore80/PlantApp.svg?style=for-the-badge
[contributors-url]: https://github.com/MiaMoore80/PlantApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MiaMoore80/PlantApp.svg?style=for-the-badge
[forks-url]: https://github.com/MiaMoore80/PlantApp/network/members
[stars-shield]: https://img.shields.io/github/stars/MiaMoore80/PlantApp.svg?style=for-the-badge
[stars-url]: https://github.com/MiaMoore80/PlantApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/MiaMoore80/PlantApp.svg?style=for-the-badge
[issues-url]: https://github.com/MiaMoore80/PlantApp/issues
[license-shield]: https://img.shields.io/github/license/MiaMoore80/PlantApp.svg?style=for-the-badge
[license-url]: https://github.com/MiaMoore80/PlantApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[tailwind-url]: https://tailwindcss.com/docs/guides/create-react-app