import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gd-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.less']
})

export class RepoDetailsComponent implements OnInit {
  data$=<Object>DATA;
  constructor() { }

  ngOnInit() {
  }

}
var DATA = {
  detailsHTML: '<p><img src="logo.png" alt="Clarity"></p>\n' +
    '<h1 id="clarity-design-system">Clarity Design System</h1>\n' +
    '<p><a href="https://travis-ci.com/vmware/clarity"><img src="https://travis-ci.com/vmware/clarity.svg?branch=master" alt="Build Status"></a></p>\n' +
    '<p><a href="https://saucelabs.com/beta/builds/b16110e384ce459ab68f10da6e38a285"><img src="https://saucelabs.com/browser-matrix/claritydesignsystem.svg" alt="Build Status"></a></p>\n' +
    '<p>Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components. This repository includes everything you need to build, customize, test, and deploy Clarity. For complete documentation, visit the <a href="https://clarity.design">Clarity website</a>.</p>\n' +
    '<h2 id="getting-started">Getting Started</h2>\n' +
    '<p>Clarity is published as three npm packages:</p>\n' +
    '<ul>\n' +
    '<li><strong>@clr/icons.</strong> Contains the custom element icons.</li>\n' +
    '<li><strong>@clr/ui.</strong> Contains the static styles for building HTML components.</li>\n' +
    '<li><strong>@clr/angular.</strong> Contains the Angular components. This package depends on @clr/ui for styles.</li>\n' +
    '</ul>\n' +
    '<p>The easiest way to run a sample Angular application with Clarity is to use the Angular CLI and run <code>ng add @clr/angular</code>.</p>\n' +
    '<p>If you already have an Angular application, you can follow the installation steps below to include and use Clarity in your application.</p>\n' +
    '<h3 id="installing-clarity-icons">Installing Clarity Icons</h3>\n' +
    '<ol>\n' +
    '<li><p>Install Clarity Icons package through npm:</p>\n' +
    '<pre><code class="language-bash">npm install @clr/icons --save</code></pre>\n' +
    '</li>\n' +
    '<li><p>Install the polyfill for Custom Elements:</p>\n' +
    '<pre><code class="language-bash">npm install @webcomponents/custom-elements --save</code></pre>\n' +
    '</li>\n' +
    '<li><p>Include the clr-icons.min.css and clr-icons.min.js in your HTML. As clr-icons.min.js is dependent on the Custom Elements polyfill, make sure to include it before clr-icons.min.js:</p>\n' +
    '<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/node_modules/@clr/icons/clr-icons.min.css&quot;&gt;\n' +
    '\n' +
    '&lt;script src=&quot;path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js&quot;&gt;&lt;/script&gt;\n' +
    '&lt;script src=&quot;path/to/node_modules/clr-icons/clr-icons.min.js&quot;&gt;&lt;/script&gt;</code></pre>\n' +
    '<p>If your site is built with <a href="https://github.com/angular/angular-cli">angular-cli</a> you can achieve the above by adding the files to the styles array and\n' +
    'scripts array in <code>angular-cli.json</code>:</p>\n' +
    '<pre><code class="language-js">&quot;styles&quot;: [\n' +
    '    ...\n' +
    '    &quot;../node_modules/@clr/icons/clr-icons.min.css&quot;,\n' +
    '    ...\n' +
    '],\n' +
    '&quot;scripts&quot;: [\n' +
    '    ...\n' +
    '    &quot;../node_modules/@webcomponents/custom-elements/custom-elements.min.js&quot;,\n' +
    '    &quot;../node_modules/@clr/icons/clr-icons.min.js&quot;\n' +
    '    ...\n' +
    ']</code></pre>\n' +
    '</li>\n' +
    '</ol>\n' +
    '<h3 id="installing-clarity-ui">Installing Clarity UI</h3>\n' +
    '<ol>\n' +
    '<li><p>Install Clarity UI package through npm:</p>\n' +
    '<pre><code class="language-bash">npm install @clr/ui --save</code></pre>\n' +
    '</li>\n' +
    '<li><p>Include the clr-ui.min.css in your HTML file:</p>\n' +
    '<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/node_modules/@clr/ui/clr-ui.min.css&quot;&gt;</code></pre>\n' +
    '<p>If your site is built with <a href="https://github.com/angular/angular-cli">angular-cli</a>, you can achieve the above by adding the file to the styles array in\n' +
    '<code>angular-cli.json</code>:</p>\n' +
    '<pre><code class="language-js">&quot;styles&quot;: [\n' +
    '    ...\n' +
    '    &quot;../node_modules/@clr/ui/clr-ui.min.css&quot;\n' +
    '    ...\n' +
    ']</code></pre>\n' +
    '</li>\n' +
    '<li><p>Write your HTML with the Clarity CSS class names and markup.</p>\n' +
    '</li>\n' +
    '</ol>\n' +
    '<h3 id="installing-clarity-angular">Installing Clarity Angular</h3>\n' +
    '<ol>\n' +
    '<li><p>Follow steps above to install Clarity Icons and Clarity UI.</p>\n' +
    '</li>\n' +
    '<li><p>Install the clarity-angular package through npm:</p>\n' +
    '<pre><code class="language-bash">npm install @clr/angular --save</code></pre>\n' +
    '</li>\n' +
    '<li><p>Import the ClarityModule into your Angular application&#39;s module. Your application&#39;s main module might look like this:</p>\n' +
    '<pre><code class="language-typescript">import { NgModule } from &#39;@angular/core&#39;;\n' +
    'import { BrowserModule } from &#39;@angular/platform-browser&#39;;\n' +
    'import { ClarityModule } from &#39;@clr/angular&#39;;\n' +
    'import { AppComponent } from &#39;./app.component&#39;;\n' +
    '\n' +
    '@NgModule({\n' +
    '    imports: [\n' +
    '        BrowserModule,\n' +
    '        ClarityModule,\n' +
    '        ....\n' +
    '     ],\n' +
    '     declarations: [ AppComponent ],\n' +
    '     bootstrap: [ AppComponent ]\n' +
    '})\n' +
    'export class AppModule {    }</code></pre>\n' +
    '<p>If your application uses <a href="https://github.com/systemjs/systemjs">systemjs</a>, add the configuration\n' +
    'as in the example below.</p>\n' +
    '<pre><code>System.config({\n' +
    '    ...\n' +
    '    map: {\n' +
    '       ...\n' +
    '       &#39;@clr/angular&#39;: &#39;node_modules/@clr/angular/bundles/clr-angular.umd.js&#39;,\n' +
    '       &#39;@clr/icons&#39;: &#39;node_modules/@clr/icons/bundles/clr-icons.umd.js&#39;,\n' +
    '    },\n' +
    '    ...\n' +
    '});</code></pre></li>\n' +
    '</ol>\n' +
    '<h2 id="documentation">Documentation</h2>\n' +
    '<p>For documentation on the Clarity Design System, including a list of components and example usage, see <a href="https://clarity.design">our website</a>.</p>\n' +
    '<h2 id="contributing">Contributing</h2>\n' +
    '<p>The Clarity project team welcomes contributions from the community. For more detailed information, see <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>.</p>\n' +
    '<h2 id="licenses">Licenses</h2>\n' +
    '<ul>\n' +
    '<li>The Clarity Design System is licensed under the MIT license.</li>\n' +
    '<li>The font is licensed under the Open Font License (OFL).</li>\n' +
    '</ul>\n' +
    '<h2 id="feedback">Feedback</h2>\n' +
    '<p>If you find a bug or want to request a new feature, please open a <a href="https://github.com/vmware/clarity/issues">GitHub issue</a>.</p>\n' +
    '<p>Include a link to the reproduction scenario you created by forking one of the Clarity Stackblitz Templates for the version you are using at\n' +
    '<a href="https://stackblitz.com/@clr-team/">Clarity StackBlitz templates</a>.</p>\n'
}
