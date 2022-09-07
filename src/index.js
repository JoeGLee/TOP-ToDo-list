import './style.css';
import {appendToBody } from './append.js';
import {header} from './header.js';
import { projectBtnEvents,projectBar } from './nav.js';
import {appendToDoHome} from './todo.js'

projectBar();
projectBtnEvents();
appendToDoHome();
