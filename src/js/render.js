import { profile } from '../data/profile.js';
import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Skills } from './components/skills.js';
import { About } from './components/about.js';
import { AppFooter } from './components/footer.js';

const $ = (sel) => document.querySelector(sel);

$('#header').innerHTML = Header();
$('#hero').innerHTML = Hero(profile);
$('#skills').innerHTML = Skills(profile.skills);
$('#about').innerHTML = About(profile.about);
$('#footer').innerHTML = AppFooter();
