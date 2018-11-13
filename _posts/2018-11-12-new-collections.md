---
layout: post
title: How to build a new collections
---

# Add collections to `_config.xml`
```
collections:
  bioinfo:
    output: true
```

# Make collections
First, make collection folder under site root. Then write markdown pages in _bioinfo.
```
$ mkdir _bioinfo
```

# Build collections index
```
---
layout: default
title: Bioinfo
---

{% for bioinfo in site.bioinfo %}
  <h2>
    <a href="{{ bioinfo.url }}">
      {{ bioinfo.title }}
    </a>
  </h2>
{% endfor %}
```

# Test
```
$ jekyll server -w
```

[http://127.0.0.1:4000/bioinfo/](http://127.0.0.1:4000/bioinfo/)