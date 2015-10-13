# KX Icon Font

##About

KX Icon Font is suite of pictographic icons for easy scalable vector graphics on websites.

## Installation

This plugin requires Grunt 0.4. 

###OS X

```
brew install ttfautohint --with-python
```
*You may need to use `sudo` for `brew`, depending on your setup.*

###Linux

```
sudo apt-get install fontforge
```

### Windows

* Download and install [fontforge](http://fontforge.github.io/en-US/downloads/windows/).
* Add `C:\Program Files (x86)\FontForgeBuilds\bin` to your `PATH` environment variable.

## Usage

Example `i.kx-icon.kx-cross-device`

## Contributing

* Clone project
  ```
  git clone git@github.com:krux/kx-icon-font.git
  ```
* Install dependencies
  ```
  npm install
  ```
* Add new *.svg icons folder without kx- in name
* Run grunt task `gen_font`
* Push changes to remote folder
