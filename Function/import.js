// This Part is Data-Processing Part.
// Don't Touch if You Aren't Coder.
function Import(ChecksPush){

var jspath = document.currentScript.src
var jsname = jspath.split('/')
jsname = jsname[jsname.length-1]

var jssplit = jsname.split('-')
var Year = jssplit[0]
var Month = jssplit[1].replace('.js','')

var GetSName = new Date()
GetSName.setFullYear(Year)
GetSName.setMonth(Month-1)
GetSName.setDate(1)
var Count = GetSName.getDay()

var GetEndDate = new Date()
GetEndDate.setFullYear(Year)
GetEndDate.setMonth(Month)
GetEndDate.setDate(0)
var Dates = GetEndDate.getDate()

Constantine = []
if (Count != 0)
{ var SLine = ''.padStart(Count*2-1, '0:').split(':'); Constantine = SLine }
var suffix = 7 - (Dates + Constantine.length) % 7
for (i = 1; i < Dates+1; i++) { Constantine.push(String(i)) }
for (s = 0; s < suffix; s++) { Constantine.push('0') }

var div = document.createElement('div')
div.id = jsname.replace('.js','')
div.style.display = 'none'
div.className = 'Calender'
document.getElementById('Calender').appendChild(div)

var Color = '#0D1E32'
var highlightColor = '#AB0101'

var levelColor = ['#AB0101','#6e0000','#400000']

for (n = 1; n < Math.ceil(Constantine.length / 7) + 1; n++) {
    var selection = Constantine.slice(String(7*(n-1)), String(7*n))
    var align = document.createElement('div')
    align.id = jsname.replace('.js','') + '_' + String(n)
    align.className = 'CalLine'
    document.getElementById(jsname.replace('.js','')).appendChild(align)
    for (a = 0; a < selection.length; a++){
        var button = document.createElement('button')
        button.id = jsname.replace('.js','') + '_' + 'Button'
        button.className = 'CalItem'
        // button.onpointerdown = "ripplet(arguments[0])"
        // button.setAttribute('onpointerdown', 'ripplet(arguments[0], {opacity:\'0.25\'})')
        if (selection[a] != 0) {button.innerText = selection[a]}
        else {button.innerText = '0'; button.style.color = 'transparent'}
        button.title = 0
        // button.style.backgroundColor = Color
        if (ChecksPush != undefined){
            for (c=0;c<Checks.length;c++){
                let count = Checks[c].split(':')[1]
                if (button.innerText == Checks[c].split(':')[0]){
                    if (count == 1) {
                        button.style.backgroundColor = levelColor[0]
                    } else if (count == 2) {
                        button.style.backgroundColor = levelColor[1]
                    } else if (count == 3) {
                        button.style.backgroundColor = levelColor[2]
                    } else {
                        button.style.backgroundColor = 'black'
                    }
                    button.title = Checks[c].split(':')[1]
                }
            }
        }
        document.getElementById(jsname.replace('.js','') + '_' + String(n)).appendChild(button)
    }
}

var select = document.getElementById('select')
document.getElementById(select.value).style.display = 'block'

if (select.value == array[0]){
    var left = document.getElementById('left')
    left.style.backgroundColor = '#4d5257'
    left.setAttribute('onpointerdown','')
    left.style.pointerEvents = 'none'
} 
if (select.value == array[array.length-1]){
    var right = document.getElementById('right')
    right.style.backgroundColor = '#4d5257'
    right.setAttribute('onpointerdown','')
    right.style.pointerEvents = 'none'
}
}