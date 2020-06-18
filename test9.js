var express = require('express');
var http = require('http');
var path = requrie('path');


var bodyParser = require('body-parser');
var cookieParse = require('cookie-parser');
var static = require('serve-static');
var errorHandler = require('errorHandler');


var expressErrorHandler = requrie('express=error-handler');

var expressSession = require('express-session');
var app