# mrh-forty

A customization of a Gatsby.js theme based on the Forty site template,
designed by HTML5 UP and edited by Mark Hylas. The purpose of this project
is to provide a GIS & UAS portfolio.

## Installation

Install this theme (assuming Gatsby is installed) by running from your CLI:

```
gatsby new gatsby-theme-forty https://github.com/codebushi/gatsby-theme-forty
cd gatsby-theme-forty
gatsby develop
```

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/e81fda62-465b-4219-b014-1e83d729de5d/deploy-status)](https://app.netlify.com/sites/admiring-einstein-e04d2c/deploys)
