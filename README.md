#HiDPIfy

## What is it?

Script to scale images on websites automatically in order to be viewed in HiDPI on capable displays.

## How does it work?

Using jQuery, the script iterates over all images and halves their width and height. It works on singe large images opened in the browser as well.

## Status

The current implementation is braindead, i.e. it simply halves both dimensions of all images, repeatedly if executed again; backgrounds are ignored. Thus, this is so far only a proof of concept, "proof" being an exaggeration.

Pull requests welcome.

## Bookmarklet

If you bookmark the following link

Since github appears to strip javascript from md documents, this is the bookmarklet code:
<code>
javascript:var j=document.createElement('script');j.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');document.getElementsByTagName('body')[0].appendChild(j);void(j);$('img').each(function(){var halfwidth=this.width/2;var halfheight=this.height/2;$(this).css('width',halfwidth);$(this).css('height',halfheight);this.width=halfwidth;this.height=halfheight});
</code>

Create a bookmark, e.g. "HiDPIfy this site", with the above code as the address. Clicking on it will add jQuery 1.8.1 to the site as well as halving image dimensions. It may be necessary to click twice.

The base script is available in the **src** folder.

Curtsy to learningjquery.com for providing a [sample implementation](http://www.learningjquery.com/2006/12/jquerify-bookmarklet) of dynamically adding jQuery to a loaded browser site.

## Example sites
Nice examples to demo this are:

* [http://boston.com/bigpicture](http://boston.com/bigpicture)
* [http://www.flickr.com/explore/](http://www.flickr.com/explore/)