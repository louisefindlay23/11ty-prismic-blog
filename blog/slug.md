---
pagination:
  data: prismic.developer_posts
  size: 1
  alias: post
	addAllPagesToCollections: true
permalink: "blog/{{ post.uid }}/"
templateEngineOverride: md
markdownTemplateEngine: true
---

<h1>{% asText post.data.title %}</h1>
{% asText post.data.content %}

{{ post.data | log }}