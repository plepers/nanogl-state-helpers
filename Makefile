PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

source_files    := $(notdir $(wildcard src/*.js))
build_files     := $(source_files:src/%.js=./%.js)

app_bundle      := app.js

.PHONY: all

all: $(app_bundle)

./%.js: src/%.js
	uglifyjs  -m -c warnings=false -b -e -o $@ -- node_modules/nanogl-constants/constants.js $<

$(app_bundle): $(build_files)
	echo "built"
