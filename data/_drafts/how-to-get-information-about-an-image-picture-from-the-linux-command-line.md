---
title: How to get information about an image (picture) from the Linux command-line
tags:
---

## First option: file

For some image formats you can just use the file command:

`$ file MyPNG.png`
MyPNG.png: PNG image, 681 x 345, 8-bit/color RGB, non-interlaced

## Second option: identify

The best way to get this information is by using the identify command:

`$ identify image.png`

It is part of ImageMagick, which you can install on Ubuntu like so:

`$ sudo apt-get install imagemagick`