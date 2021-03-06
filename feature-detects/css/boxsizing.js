/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "aliases": [],
  "tags": ["css"],
  "knownBugs": [],
  "doc" : null,
  "authors": [],
  "warnings": [],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function( Modernizr, testAllProps ) {
  Modernizr.addTest('boxsizing', function() {
    return testAllProps('boxSizing') && (document.documentMode === undefined || document.documentMode > 7);
  });
});
