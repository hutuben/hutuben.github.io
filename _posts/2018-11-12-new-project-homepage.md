---
layout: post
title: How to build first project page with Jekyll
---

# Build project `Rcwl` page with Jekyll

To create a page directory called `Rcwl`

```
$ jekyll new Rcwl
$ cd Rcwl
```

To view the default page locally

```
$ jekyll serve --watch
```

Then go to [http://localhost:4000](http://localhost:4000). The `--watch` option will build the site every time you save the markdown file.

The pages are located in `gh-pages/_posts`. Now we can build first page in markdown format. The file name must be `YYYY-MM-DD-title.md`, and the `layout : post` is suggested to be added in the header. Then we can edit the `_config.yaml` file to change some meta infomative for the pages.

# Push to github
Here we push the first page to project home page.

```
$ git init
$ git checkout -b gh-pages
$ git add .
$ git commit -m 'first page'
$ git remote add origin https://github.com/hubentu/Rcwl.git
$ git push -u origin gh-pages
```

The project github page is ready! 

[https://hubentu.github.io/Rcwl]()
