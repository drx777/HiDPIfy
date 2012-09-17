#HiDPIfy

## What is it?

Script to scale images on websites automatically in order to be viewed in HiDPI on capable displays.

## How does it work?

Using jQuery, the script iterates over all images and halves their width and height.

## Status

The current implementation is braindead, i.e. it simply halves both dimensions of all images, repeatedly if executed again; backgrounds are ignored. Thus, this is so far only a proof of concept, "proof" being an exaggeration.

Pull requests welcome.

## Bookmarklet

If you bookmark the following link

  <a href="javascript:var%20j%20=%20document.createElement('script');j.setAttribute('src',%20'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');document.getElementsByTagName('body')[0].appendChild(j);void(j);$("img").each(function()%20{%20%20%20var%20halfwidth%20=%20this.width%20/%202;%20%20%20var%20halfheight%20=%20this.height%20/%202;%20%20%20$(this).css("width",%20halfwidth);%20%20%20$(this).css("height",%20halfheight);%20%20%20this.width%20=%20halfwidth;%20%20%20this.height%20=%20halfheight});">HiDPIfy this site</a>
  
clicking on it will add jQuery 1.8.1 to the site as well as halving image dimensions. 

The base script is available in the **src** folder.

Curtsy to learningjquery.com for providing a [sample implementation](http://www.learningjquery.com/2006/12/jquerify-bookmarklet) of dynamically adding jQuery to a loaded browser site.

## Example sites
Nice examples to demo this are:

* [http://boston.com/bigpicture](http://boston.com/bigpicture)
* [http://www.flickr.com/explore/](http://www.flickr.com/explore/)