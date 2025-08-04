import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Bruno Parga - Web Developer</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:200,400" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      
      <div id="page-content">
        <div className="card" id="summary">
          <img 
            src="/profile-500c209e96d0465192a7f32bf1ff008e.jpg" 
            className="profile-pic-width" 
            id="profile-pic" 
            alt="Photo of Bruno Parga"
          />
          <h1 id="my-name" className="text-color font-regular">Bruno Parga</h1>
          <h3 className="sub-header font-light font-highlight">Web developer, coding bootcamp instructor</h3>
          <h3 className="sub-header font-light font-highlight">React, NodeJS+Express, Rails, Elixir+Phoenix</h3>
          <div className="presentation">
            <p className="font-regular main-p-padding">
              After majoring in History, freelancing as a translator, serving at the Brazilian Foreign Ministry as a diplomat and driving for ride-sharing services, I've pivoted to a programming career.
            </p>
            <p className="font-regular main-p-padding">
              I am currently available for freelance and full-time Web dev work.{' '}
              <a href="/Bruno Parga resume-95b16a278c5a22ab319d8c08ed10ef1e.pdf">This is my resume</a> and below is some of what I can do.
            </p>
          </div>
        </div>

        <div className="card" id="projects">
          <h3 className="sub-header font-regular">Cicero</h3>
          <div className="project">
            <a href="https://bp-cicero.xyz/">
              <img 
                src="/cicero-1c19d0af6451430f5fb975a9d6936a81.png" 
                alt="A screenshot of the Cicero website" 
                className="screenshot"
              />
            </a>
            <div className="project-info">
              <p className="font-highlight font-light">
                Cicero is a Latin language learning app. It is based on the list of the ~1500 most common words found in Classical Latin texts. As you learn, it will remember which words you've already studied and present them for review.<br/>
                <a href="https://gitlab.com/brunoparga/cicero-server">Back-end</a> developed with Express.js in plain JavaScript;{' '}
                <a href="https://gitlab.com/brunoparga/cicero-server">front-end</a> in React with TypeScript. I decided, as an experiment, to use the Context hook of React exclusively, in lieu of Redux, for app state management.
              </p>
            </div>
          </div>

          <h3 className="sub-header font-regular">Words</h3>
          <div className="project">
            <div className="project-info">
              <p className="font-highlight font-light">
                In <a href="https://github.com/brunoparga/words">this game</a>, you are presented with a series of letters. You must find the longest word you can with them. But it may also be a good move to form a short word like <em>hex</em>, since rare letters like X score more points...<br/>
                Developed with Node.js, Express and the Pug templating engine.
              </p>
            </div>
            <a href="https://bp-words.herokuapp.com/">
              <img 
                src="/words-c7ca3abaa85cfca5abeed462875c41ee.png" 
                alt="A screenshot of the Words website" 
                className="screenshot"
              />
            </a>
          </div>
        </div>

        <div className="card" id="open-source">
          <h2 id="favorites-header" className="text-color font-highlight">Contributions to open source projects</h2>
          
          <h3 className="sub-header font-regular">PredictionBook</h3>
          <div className="project">
            <a href="https://predictionbook.com/">
              <img 
                src="/predbook-9d8cb37eb995e6feefa0152c06705d00.png" 
                alt="A screenshot of the PredictionBook website" 
                className="screenshot"
              />
            </a>
            <div className="project-info">
              <p className="font-highlight font-light">
                A <a href="https://github.com/tricycle/predictionbook">Web app</a> to record and track predictions.<br/>
                On top of several maintenance activities I've performed for this Ruby on Rails/PostgreSQL project, I have introduced the filtering tool that allows users to see only predictions that have already resolved as right or wrong, or only those still in the future.
              </p>
            </div>
          </div>

          <h3 className="sub-header font-regular">ActivityWatch</h3>
          <div className="project">
            <div className="project-info">
              <p className="font-highlight font-light">
                A time-tracking/lifelogging app.<br/>
                I have restored the <a href="https://github.com/ActivityWatch/aw-watcher-vscode">VS Codium extension</a> ("watcher") to functionality, so that I can use it myself 😊. This required a fix to its <a href="https://github.com/ActivityWatch/aw-client-js">JavaScript client</a> as well.
              </p>
            </div>
            <a href="https://activitywatch.net/">
              <img 
                src="/activitywatch-25eac54ab36fa54bbbb15ce478c46840.png" 
                alt="A screenshot of the ActivityWatch website" 
                className="screenshot"
              />
            </a>
          </div>

          <div className="project no-screenshot">
            <div className="project-info">
              <p className="font-highlight font-light">
                <strong><a href="https://gitlab.com/brunoparga/react-combine-reducers">react-combine-reducers:</a> </strong>
                A small library providing the same functionality as the <code>combineReducers</code> utility from Redux, but designed for use in Redux-less apps. I replaced a deprecated dependency from this package with a more modern one. I also provided the only tests present in the project.
              </p>
            </div>
            <div className="project-info">
              <p className="font-highlight font-light">
                <strong><a href="https://github.com/neoclide/coc-eslint">coc-eslint:</a> </strong>
                Integrate Eslint linter with Vim text editor by means of Coc NodeJS interface. I contributed documentation to this project.
              </p>
            </div>
          </div>
        </div>

        <div className="card" id="interviews">
          <h2 id="favorites-header" className="text-color font-highlight">Challenges done while interviewing</h2>
          
          <h3 className="sub-header font-regular">FaveJobs</h3>
          <div className="project">
            <a href="https://brunoparga.github.io/fave-jobs-react/#/">
              <img 
                src="/fave-jobs-ee7dde65c7a311ec81f9757df5b54a4a.png" 
                alt="A screenshot of the FaveJobs website" 
                className="screenshot"
              />
            </a>
            <div className="project-info">
              <p className="font-highlight font-light">
                <a href="https://github.com/brunoparga/fave-jobs-react">A client</a> to a job search portal's API. I built the frontend in React and <a href="https://github.com/brunoparga/fave-jobs-api">the backend</a> in Ruby on Rails. There being no user authentication was part of the challenge specs.
              </p>
            </div>
          </div>

          <h3 className="sub-header font-regular">GitHub Stars</h3>
          <div className="project">
            <div className="project-info">
              <p className="font-highlight font-light">
                A client to interact with GitHub's API, fetching a given user's starred repositories. When interacting with their own repos, users can add tags to them. The design is very bare-bones because making it pretty was a separate challenge, specific for designers! My <a href="https://github.com/brunoparga/githubstars">Rails server</a> renders the views (without React or any JS frontend framework.)
              </p>
            </div>
            <a href="https://bp-githubstars.herokuapp.com/">
              <img 
                src="/github-stars-0cdcc70e0f7f2eb453678e6a2fc4daa9.png" 
                alt="A screenshot of the GitHub Stars website" 
                className="screenshot"
              />
            </a>
          </div>
        </div>

        <div className="card" id="contact">
          <h2 id="favorites-header" className="text-color font-highlight">Some of my interests</h2>
          <table id="table-width">
            <tr>
              <td className="td-width">
                <img 
                  src="/miri-4c963cc1c560ab0f8edc7866aa3096bd.png" 
                  className="fave-img fave-img-width" 
                  alt="the logo of the Machine Intelligence Research Institute. Ten stripes rise from a point at the bottom center; their width and spacing increases as one moves up along them. The perspective suggests they turn outward, facing the viewer, forming a semicircular shape. The leftmost one is orange, the second one is green, the rest are blue. Below the stripes is the acronym 'MIRI' in capital blue letters."
                />
              </td>
              <td className="td-width">
                <h3 className="sub-header font-regular">Rationality</h3>
                <p className="font-light font-highlight">
                  I love the art of rationality: obtaining better beliefs — ones that better reflect reality — and systematically achieving one's goals.
                </p>
              </td>
            </tr>
            <tr>
              <td className="td-width">
                <h3 className="sub-header font-regular">Effective Altruism</h3>
                <p className="font-light font-highlight">
                  Effective Altruism is the idea that our efforts to make the world a better place (e.g. through charity) should use reason and evidence in order to maximize their positive impact.
                </p>
                <p className="font-light font-highlight">
                  I have taken the <a href="https://www.givingwhatwecan.org/">Giving What We Can</a> pledge to donate 10% of my lifetime income to effective charities.
                </p>
              </td>
              <td className="td-width">
                <img 
                  src="/gwwc-logo-adaff9133fee4977f1d9bd2bb764f9cd.jpg" 
                  className="fave-img fave-img-width" 
                  alt="The logo of Giving What We Can: a dark red square with centered text: the word 'GIVING' in white capital letters and the text 'what we can' below it in light gray."
                />
              </td>
            </tr>
          </table>
        </div>

        <div className="card" id="contact">
          <ul className="list-horizontal">
            <li>
              <a href="https://github.com/brunoparga/" className="font-highlight">
                <FontAwesomeIcon icon={faGithub} className="i-valign" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/brunoparga/" className="font-highlight">
                <FontAwesomeIcon icon={faGitlab} className="i-valign" /> GitLab
              </a>
            </li>
            <li>
              <a href="mailto:contact@brunoparga.net" className="font-highlight">
                <FontAwesomeIcon icon={faEnvelope} className="i-valign" /> contact at brunoparga dot net
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brunoparga/" className="font-highlight">
                <FontAwesomeIcon icon={faLinkedin} className="i-valign" /> LinkedIn
              </a>
            </li>
          </ul>
          <small style={{textAlign: 'center'}} className="img-description">
            <em>This page built with Gatsby.JS</em>
          </small>
        </div>
      </div>
    </>
  )
}

export default IndexPage 