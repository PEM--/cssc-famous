# This file is a translation from:
#  https://github.com/Famous/famous/blob/master/src/core/famous.css
@famousCss = new CSSC

famousCss
  .add '.famous-root',
    width: CSSC.pc 100
    height: CSSC.pc 100
    margin: 0
    padding: 0
    # ios8 hotfix
    opacity: .999999
    overflow: 'hidden'
    webkitTransformStyle: 'preserve-3d'
    transformStyle: 'preserve-3d'
  .add ['.famous-container', '.famous-group'],
    position: 'absolute'
    top: 0
    left: 0
    bottom: 0
    right: 0
    overflow: 'visible'
    webkitTransformStyle: 'preserve-3d'
    transformStyle: 'preserve-3d'
    webkitBackfaceVisibility: 'visible'
    backfaceVisibility: 'visible'
    pointerEvents: 'none'
  .add '.famous-group',
    width: 0
    height: 0
    margin: 0
    padding: 0
  .add '.famous-surface',
    position: 'absolute'
    webkitTransformOrigin: 'center center'
    transformOrigin: 'center center'
    webkitBackfaceVisibility: 'hidden'
    backfaceVisibility: 'hidden'
    webkitTransformStyle: 'preserve-3d'
    transformStyle: 'preserve-3d'
    webkitBoxSizing: 'border-box'
    mozBoxSizing: 'border-box'
    boxSizing: 'border-box'
    webkitTapHighlightColor: 'transparent'
    pointerEvents: 'auto'
  .add '.famous-container-group',
    position: 'relative'
    width: CSSC.pc 100
    height: CSSC.pc 100
