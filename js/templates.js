var header = '<a href="/" class="logo no-hover"><img src="/images/logo.svg"></a><div class="nav-items"><a href="/blog">Blog</a><a class="icon" href="mailto:jaishwarya71@gmail.com"><img src="/images/email-icon.svg"></a></div>'
var footer = '<a href="/" class="no-hover"><img src="/images/monogram-logo.svg"></a><div class="nav-items"><a href="/blog">Blog</a><a class="icon" href="mailto:jaishwarya71@gmail.com"><img src="/images/email-icon.svg"></a></div>'
var newsletter = '<h1>Arch Insights - Delivered</h1><p>I regularly publish articles related to communication for architects. Leave an email to get periodical updates.</p> <div id="mc_embed_signup"> <form action="https://aishwaryajadhav.us18.list-manage.com/subscribe/post?u=3070e0b4a040e0c55b825b30b&amp;id=7c478db450" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate> <div id="mc_embed_signup_scroll"> <div class="buttons"> <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Email"> <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"> </div> <div hidden="true"><input type="hidden" name="tags" value="2143954"></div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3070e0b4a040e0c55b825b30b_7c478db450" tabindex="-1" value=""></div> </div> </form> </div>'

document.getElementById('header-navigation').innerHTML = header;
document.getElementById('footer-navigation').innerHTML = footer;
document.getElementById('newsletter').innerHTML = newsletter;

if (document.querySelector('body').classList.contains('blog-post')) {
  //Get current post ID from Body
  var postId = document.querySelector('body').dataset.id;

  //Pick a random post to show 'next'
  var i = 0;
  while (nextKey == postId && i < 5) {
    nextKey = randomKey();
    i++;
  }

  //Render post details
  document.getElementById('post-date').innerHTML = posts[postId].date;
  document.getElementById('post-title').innerHTML = posts[postId].title;
  document.getElementById('post-summary').innerHTML = posts[postId].summary;
}

if (document.querySelectorAll('.suggested-post').length > 0) {
  var nextPost = posts[nextKey];
  document.getElementById('suggested-title').innerHTML = '<a href="/blog/post/'+nextPost.url+'">'+nextPost.title+'</a>';
  document.getElementById('suggested-summary').innerHTML = nextPost.summary+' <a href="/blog/post/'+nextPost.url+'">Continue &rarr;</a>';
}

if (document.querySelector('body').classList.contains('blog-index')) {
  keys.forEach((key, index) => {
    var template = '<div class="article"><aside class="date">'+posts[key].date+'</aside><h1><a href="/blog/post/'+posts[key].url+'">'+posts[key].title+'</a></h1><p>'+posts[key].summary+' <a href="/blog/post/'+posts[key].url+'">Continue &rarr;</a></p></div>'
    document.getElementById('articles-list').innerHTML += template;
  });
}
