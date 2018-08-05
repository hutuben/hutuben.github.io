---
layout: post
title: How to build first github page with Jekyll
---

# Installing Jekyll

The `Jekyll` depends on Ruby and Bundler. Here is the command to install dependecies.

```
$ sudo install ruby ruby-dev
$ sudo gem install bundler
```

Then to install Jekyll

```
$ sudo gem install jekyll
```

# Build first page with Jekyll

To create a page directory called gh-pages

```
$ jekyll new gh-pages
$ cd gh-pages
```

To view the default page locally

```
$ jekyll serve --watch
```

Then go to [http://localhost:4000](http://localhost:4000). The `--watch` option will build the site every time you save the markdown file.

The pages are located in `gh-pages/_posts`. Now we can build first page in markdown format. The file name must be `YYYY-MM-DD-title.md`, and the `layout : post` is suggested to be added in the header. Then we can edit the `_config.yaml` file to change some meta infomative for the pages.

# Push to github
Here we push the first page to user home page. First we need to add a new repositiory in github with name of `yourname.github.io`. Then commit jekyll pages and push to the repository.

```
$ git init
$ git add .
$ git commit -m 'first jekyll page'
$ git remote add origin https://github.com/hubentu/hubentu.github.io.git
$ git push -u origin master
```

The first github page is ready! 

[https://hubentu.github.io/]()
