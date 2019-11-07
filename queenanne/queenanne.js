// PROGRESS BAR AND MENU SECTION --------------------------------------------

const progressBar = document.querySelector('div.progress-bar')
const bodyTag = document.querySelector('body')



document.addEventListener('scroll', function(){
    
    const pageTop = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight
    
    const percentageWidth = pageTop / totalScrollableDistance
    
    progressBar.style.width = percentageWidth * 100 + '%'
})

const mobileMenuIcon = document.querySelector('div.mobile-menu-icon')
const mobileMenu = document.querySelector('div.mobile-menu')
const closeTag = document.querySelector('div.close')
const headerTag = document.querySelector('header')

mobileMenuIcon.addEventListener('click', ()=>{
  mobileMenu.classList.add('open')
  closeTag.classList.add('open')
  headerTag.classList.add('open')
})

closeTag.addEventListener('click', ()=>{
  mobileMenu.classList.remove('open')
  closeTag.classList.remove('open')
  headerTag.classList.remove('open')
})



// COUNTING ANIIMATION SECTION -------------------------------------------

const counterOne = document.querySelector('input[name="counter-one"]')
const counterTwo = document.querySelector('input[name="counter-two"]')
const counterThree = document.querySelector('input[name="counter-three"]')

    anime({
        targets: '.counter-one',
        value: [0, 267],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });

      anime({
        targets: '.counter-two',
        value: [0, 40],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });

      anime({
        targets: '.counter-three',
        value: [0, 8],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });





// BODY SAMPLES SECTION

const bodyOneLineHeight = document.querySelector('input[name="body-one-lineheight"]')
const bodyOneTracking = document.querySelector('input[name="body-one-tracking"]')
const bodyOneText = document.querySelector('.body-one-text')
bodyOneLineHeight.addEventListener('input', function (){
  bodyOneText.style.lineHeight = this.value
})
bodyOneTracking.addEventListener('input', function (){
  bodyOneText.style.letterSpacing = this.value + 'em'
})


const bodyTwoLineHeight = document.querySelector('input[name="body-two-lineheight"]')
const bodyTwoTracking = document.querySelector('input[name="body-two-tracking"]')
const bodyTwoText = document.querySelector('.body-two-text')
bodyTwoLineHeight.addEventListener('input', function (){
  bodyTwoText.style.lineHeight = this.value
})
bodyTwoTracking.addEventListener('input', function (){
  bodyTwoText.style.letterSpacing = this.value + 'em'
})


const bodyThreeLineHeight = document.querySelector('input[name="body-three-lineheight"]')
const bodyThreeTracking = document.querySelector('input[name="body-three-tracking"]')
const bodyThreeText = document.querySelector('.body-three-text')
bodyThreeLineHeight.addEventListener('input', function (){
  bodyThreeText.style.lineHeight = this.value
})
bodyThreeTracking.addEventListener('input', function (){
  bodyThreeText.style.letterSpacing = this.value + 'em'
})











// GRID HOVER SECTION

const characterViewSection = document.querySelector('section.character-viewer')
const characterContainer = document.querySelector('div.character-container')
const gridContainer = document.querySelector('section.grid-container')
const characters = gridContainer.querySelectorAll('div')
const characterCursor = document.querySelector('div.character-cursor')

characterViewSection.addEventListener('mouseenter', ()=>{
  characterCursor.style.visibility = 'visible'
  characterContainer.style.visibility = 'visible'
})

characterViewSection.addEventListener('mouseleave', ()=>{
  characterCursor.style.visibility = 'hidden'
  characterContainer.style.visibility = 'hidden'
})

characterViewSection.addEventListener('mousemove', (e)=>{
  const X = e.pageX
  const Y = e.pageY
  const W = window.innerWidth
  const rightBorder = (W - 200)

  if(X < 200){
    characterContainer.style.left = 300
    characterCursor.style.left = 300
  } else if (X > rightBorder){
    characterContainer.style.left = rightBorder
    characterCursor.style.left = rightBorder
  } else{
    characterContainer.style.left = X + 'px'
    characterCursor.style.left = X + 'px'
  }

  characterCursor.style.top = Y + 'px'
  characterContainer.style.top = Y + 'px'
})



characters.forEach(div=>{
    const character = div.innerHTML

    div.addEventListener('mouseenter', function (){
      
      
      characterContainer.innerHTML = character
    })
})








// TYPE TESTER SECTION -----------------------------------------------------

const typeTester = document.querySelector('section.type-tester')
const lineHeightTag = document.querySelector('input[name="leading"]')
const typeSize = document.querySelector('input[name="typesize"]')
const spacingTag = document.querySelector('input[name="tracking"]')
const outputTag = document.querySelector('div.type-output')
const stylesTag = document.querySelector('select.styles')

const typeSizeOutput = document.querySelector('.typesize-output')
const lineHeightOutput = document.querySelector('.line-height-output')
const spacingOutput = document.querySelector('.spacing-output')


// this resets the innerHTML on outputTag to be empty on first click only if the type says "Try Intro..."
outputTag.addEventListener('click', ()=>{
    if(outputTag.innerHTML.indexOf("Try Queen Anne...") !== -1) {
        outputTag.innerHTML = ''
    }
})

const testerInstanceSelect = document.querySelector('div.custom-select-four')
const testerInstanceSelected = testerInstanceSelect.querySelector('div.select-selected')
const selectItems = testerInstanceSelect.querySelector('div.select-items')
const selectItemsDiv = selectItems.querySelectorAll('div')

testerInstanceSelect.addEventListener('click', ()=>{
  const style = testerInstanceSelected.innerHTML

  if(style == "Light"){
    outputTag.style.fontFamily = 'Queen Anne Light'
  } else if(style == "Light Italic"){
    outputTag.style.fontFamily = "Queen Anne Light Italic"
  } else if(style == "Regular"){
    outputTag.style.fontFamily = "Queen Anne Regular"
  } else if(style == "Regular Italic"){
    outputTag.style.fontFamily = "Queen Anne Italic"
  } else if(style == "Medium"){
    outputTag.style.fontFamily = "Queen Anne Medium"
  } else if(style == "Medium Italic"){
    outputTag.style.fontFamily = "Queen Anne Medium Italic"
  } else if(style == "Bold"){
    outputTag.style.fontFamily = "Queen Anne Bold"
  } else if(style == "Bold Italic"){
    outputTag.style.fontFamily = "Queen Anne Bold Italic"
  }
})



spacingTag.addEventListener('input', function(){
    outputTag.style.letterSpacing = this.value + 'em'
    spacingOutput.innerHTML = this.value
})



lineHeightTag.addEventListener('input', function(){
    outputTag.style.lineHeight = this.value
    lineHeightOutput.innerHTML = this.value
})


typeSize.addEventListener('input', function(){
        outputTag.style.fontSize = this.value + 'px'
        typeSizeOutput.innerHTML = this.value + 'px'
})



const parLeft = document.querySelector('p.paragraph-left')
const parCenter = document.querySelector('p.paragraph-center')
const parRight = document.querySelector('p.paragraph-right')

parLeft.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'left'
})
parCenter.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'center'
})
parRight.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'right'
})

const ipsumTag = document.querySelector('.ipsum')

ipsumTag.addEventListener('click', ()=>{
    outputTag.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    outputTag.style.fontSize = 60 + 'px'
    typeSize.value = 60
    typeSizeOutput.innerHTML = 60 + 'px'
    outputTag.style.lineHeight = 1.5
    lineHeightOutput.innerHTML = 1.5
    lineHeightTag.value = 1.5
    
})


const colorCircles = document.querySelector('.color-circles')
const blackCircle = document.querySelector('.black-circle')
const redCircle = document.querySelector('.red-circle')
const grayCircle = document.querySelector('.gray-circle')
const greenCircle = document.querySelector('.green-circle')
const borderTag = document.querySelector('div.options-top')
const rangeTags = document.querySelectorAll('input[type=range]')


blackCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = 'var(--black)'
    typeTester.style.color = 'var(--white)'
    rangeTags.forEach(tag=>{
        tag.style.background = "var(--white)"
    })
    borderTag.style.borderBottom = '1px solid var(--white)'
    testerInstanceSelect.style.backgroundColor = "var(--black)"
    testerInstanceSelect.style.color = "var(--white)"
    testerInstanceSelected.style.color = "var(--white)"
    testerInstanceSelected.classList.add('white')
    selectItems.style.backgroundColor= "var(--black)"
    selectItemsDiv.forEach(div=>{
      div.style.color= "var(--white)"
    })
    
})

redCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = 'var(--accent)'
    typeTester.style.color = 'var(--bg-color)'
    rangeTags.forEach(tag=>{
        tag.style.background = "var(--mid-gray)"
    })
    borderTag.style.borderBottom = '1px solid var(--bg-color)'
    testerInstanceSelect.style.backgroundColor = "var(--accent)"
    testerInstanceSelect.style.color = "var(--white)"
    testerInstanceSelected.style.color = "var(--white)"
    testerInstanceSelected.classList.add('white')
    selectItems.style.backgroundColor= "var(--accent)"
    selectItemsDiv.forEach(div=>{
      div.style.color= "var(--white)"
    })
})

grayCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = 'var(--bg-color)'
    typeTester.style.color = 'var(--green)'
    rangeTags.forEach(tag=>{
        tag.style.background = "var(--mid-gray)"
    })
    borderTag.style.borderBottom = '1px solid var(--green)'
    testerInstanceSelect.style.backgroundColor = "var(--bg-color)"
    testerInstanceSelect.style.color = "var(--green)"
    testerInstanceSelected.style.color = "var(--green)"
    testerInstanceSelected.classList.remove('white')
    selectItems.style.backgroundColor= "var(--bg-color)"
    selectItemsDiv.forEach(div=>{
      div.style.color= "var(--green)"
    })
})

greenCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = 'var(--green)'
    typeTester.style.color = 'var(--white)'
    rangeTags.forEach(tag=>{
        tag.style.background = "var(--white)"
    })
    borderTag.style.borderBottom = '1px solid var(--white)'
    testerInstanceSelect.style.backgroundColor = "var(--green)"
    testerInstanceSelect.style.color = "var(--white)"
    testerInstanceSelected.style.color = "var(--white)"
    testerInstanceSelected.classList.add('white')
    selectItems.style.backgroundColor= "var(--green)"
    selectItemsDiv.forEach(div=>{
      div.style.color= "var(--white)"
    })
})










// DOWNLOAD SECTION -----------------------------------------------------


const downloadSection = document.querySelector('section.download')
const downloadCircleMain = downloadSection.querySelector('div.download-circle-main')
const hoverCirclesDown = document.querySelectorAll('div.hover-circle-down')
const hoverCirclesUp = document.querySelectorAll('div.hover-circle-up')

downloadCircleMain.addEventListener('mouseover', ()=>{

    hoverCirclesDown.forEach(circle=>{
      const x = (Math.random() *80)
      const y = (Math.random() *80)
      circle.style.transform = `translate(${x}px, ${y}px)`
      circle.style.opacity = 1
    })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
    hoverCirclesDown.forEach(circle=>{
      circle.style.transform = 'translate(0, 0)'
      circle.style.opacity = 0
    })
})

downloadCircleMain.addEventListener('mouseover', ()=>{

  hoverCirclesUp.forEach(circle=>{
    const x = -(Math.random() *80)
    const y = -(Math.random() *80)
    circle.style.transform = `translate(${x}px, ${y}px)`
    circle.style.opacity = 1
  })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
  hoverCirclesUp.forEach(circle=>{
    circle.style.transform = 'translate(0, 0)'
    circle.style.opacity = 0
  })
})
















