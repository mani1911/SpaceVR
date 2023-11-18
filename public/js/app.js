const question_and_answer = {
    "quiz": [
      {
        "name": "Mercury",
        "questions": [
          {
            "q": "What is the average distance of Mercury from the Sun?",
            "a": "57.9 million km"
          },
          {
            "q": "How many Earth days does it take for Mercury to complete one orbit around the Sun?",
            "a": "88 days"
          },
          {
            "q": "Does Mercury have any natural satellites?",
            "a": "No, it does not have any moons"
          },
          {
            "q": "What is the surface temperature of Mercury?",
            "a": "Varies from -173°C to 427°C"
          },
          {
            "q": "What is the composition of Mercury's atmosphere?",
            "a": "It has almost no atmosphere"
          }
        ]
      },
      {
        "name": "Venus",
        "questions": [
          {
            "q": "What is the rotation direction of Venus?",
            "a": "It rotates clockwise, or retrograde rotation"
          },
          {
            "q": "What is the greenhouse effect on Venus?",
            "a": "It has an extreme greenhouse effect, trapping heat"
          },
          {
            "q": "How many Earth days does it take for Venus to complete one rotation on its axis?",
            "a": "It takes about 243 Earth days"
          },
          {
            "q": "What is the surface temperature of Venus?",
            "a": "Around 465°C"
          },
          {
            "q": "Does Venus have any moons?",
            "a": "No, it does not have any moons"
          }
        ]
      },
      {
        "name": "Earth",
        "questions": [
          {
            "q": "What is the diameter of Earth?",
            "a": "Approximately 12,742 kilometers"
          },
          {
            "q": "How much of Earth's surface is covered by water?",
            "a": "About 71%"
          },
          {
            "q": "What is the Earth's atmosphere mostly composed of?",
            "a": "Nitrogen (about 78%) and Oxygen (about 21%)"
          },
          {
            "q": "What is the highest mountain on Earth?",
            "a": "Mount Everest"
          },
          {
            "q": "What is the Earth's average distance from the Sun?",
            "a": "About 149.6 million km"
          }
        ]
      },
      {
        "name": "Mars",
        "questions": [
          {
            "q": "What is the nickname for Mars due to its reddish appearance?",
            "a": "The Red Planet"
          },
          {
            "q": "How many moons does Mars have?",
            "a": "Mars has two small moons, Phobos and Deimos"
          },
          {
            "q": "What is the average surface temperature of Mars?",
            "a": "About -80 degrees Fahrenheit (-62 degrees Celsius)"
          },
          {
            "q": "What is the largest volcano on Mars?",
            "a": "Olympus Mons"
          },
          {
            "q": "What are the names of the Mars rovers?",
            "a": "Spirit, Opportunity, Curiosity, Perseverance"
          }
        ]
      },
      {
        "name": "Jupiter",
        "questions": [
          {
            "q": "What is the Great Red Spot on Jupiter?",
            "a": "A giant storm that has been raging for at least 350 years"
          },
          {
            "q": "How many moons does Jupiter have?",
            "a": "Jupiter has at least 79 known moons"
          },
          {
            "q": "What is the largest moon of Jupiter?",
            "a": "Ganymede"
          },
          {
            "q": "What is the main component of Jupiter's atmosphere?",
            "a": "Hydrogen (about 75%) and Helium (about 24%)"
          },
          {
            "q": "What is the diameter of Jupiter?",
            "a": "Approximately 139,820 kilometers"
          }
        ]
      },
      {
        "name": "Saturn",
        "questions": [
          {
            "q": "What is the most prominent feature of Saturn?",
            "a": "Its spectacular ring system"
          },
          {
            "q": "How many rings does Saturn have?",
            "a": "Saturn has seven main rings with many gaps and divisions"
          },
          {
            "q": "What is the largest moon of Saturn?",
            "a": "Titan"
          },
          {
            "q": "What is the composition of Saturn's rings?",
            "a": "Mostly composed of ice particles, with some rocky debris and dust"
          },
          {
            "q": "What is the average density of Saturn?",
            "a": "Saturn is less dense than water and would float in water"
          }
        ]
      },
      {
        "name": "Uranus",
        "questions": [
          {
            "q": "How is Uranus different from other planets in the solar system?",
            "a": "It rotates on its side, with an extreme tilt of about 98 degrees"
          },
          {
            "q": "What is the color of Uranus?",
            "a": "It has a blue-green color due to the presence of methane in its atmosphere"
          },
          {
            "q": "How many moons does Uranus have?",
            "a": "Uranus has 27 known moons"
          },
          {
            "q": "What is the composition of Uranus's atmosphere?",
            "a": "Primarily composed of hydrogen, helium, and methane"
          },
          {
            "q": "What is the diameter of Uranus?",
            "a": "Approximately 50,724 kilometers"
          }
        ]
      },
      {
        "name": "Neptune",
        "questions": [
          {
            "q": "What is the most notable feature of Neptune?",
            "a": "The Great Dark Spot, a massive storm system"
          },
          {
            "q": "How many Earth years does Neptune take to orbit the Sun?",
            "a": "About 165 Earth years"
          },
          {
            "q": "What is the average temperature of Neptune's atmosphere?",
            "a": "Around -214 degrees Celsius (-353 degrees Fahrenheit)"
          },
          {
            "q": "What is the composition of Neptune's atmosphere?",
            "a": "Primarily composed of hydrogen, helium, and methane"
          },
          {
            "q": "How many moons does Neptune have?",
            "a": "Neptune has 14 known moons"
          }
        ]
      }
    ]
  }
  

var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0}

const spaceAudio = new Audio('assets/sounds/space.mp3')

spaceAudio.play()
spaceAudio.loop = true



function get_api_data(name){
	var request = new XMLHttpRequest()

	if(information.recently!=name){
		request.open('GET', API_URL+name, true)
		request.onload = function () {

		  var data = JSON.parse(this.response)

		  if (request.status==200) {
		  	information["recently"] = name
		  	information["status"] = "successful"
		  	information["mass"] = data.mass.massValue+" "+data.mass.massExponent
		  	information["volume"] = data.vol.volValue+" "+data.vol.volExponent
		  	information["gravity"] = data.gravity
		  }
		}
		request.send()
	}
}

function set_api_data(name, mass, volume, gravity, question, answers){
	if (information.status=="successful") {
		planeta_text.setAttribute('value',name)
		Mass_text.setAttribute('value',"Mass: "+information.mass+" kg")
		volume_text.setAttribute('value',"Volume: "+information.volume+" km3")
		gravedad_text.setAttribute('value',"gravity: "+information.gravity+" m/s2")
		quiz_question_text.setAttribute('value',question)
		quiz_question_answer.setAttribute('value',answers)
	}else{
		planeta_text.setAttribute('value',name)
		Mass_text.setAttribute('value',"Mass: "+mass+" kg")
		volume_text.setAttribute('value',"volume: "+volume+" km3")
		gravedad_text.setAttribute('value',"Gravedad: "+gravity+" m/s2")
		quiz_question_text.setAttribute('value',question)
		quiz_question_answer.setAttribute('value',answers)
	}
}

AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el
    var datos = sceneEl.querySelector('#datos')
    var planeta_text = sceneEl.querySelector('#planeta_text')
    var Mass_text = sceneEl.querySelector('#Mass_text')
    var volume_text = sceneEl.querySelector('#volume_text')
    var gravedad_text = sceneEl.querySelector('#gravedad_text')
    var mercurio = sceneEl.querySelector('#mercurio')
    var venus = sceneEl.querySelector('#venus')
    var tierra = sceneEl.querySelector('#tierra')
    var marte = sceneEl.querySelector('#marte')
    var jupiter = sceneEl.querySelector('#jupiter')
    var saturno = sceneEl.querySelector('#saturno')
    var urano = sceneEl.querySelector('#urano')
    var neptuno = sceneEl.querySelector('#neptuno')
	var question_object = question_and_answer.quiz
	var cam1 = document.querySelector('#cam1');
	var cam2 = document.querySelector('#cam2');

    mercurio.addEventListener('click', function (evt) {
    	var name = "Mercury"
    	get_api_data(name)
		const question_ans = question_object[0].questions

		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Mercury","3,302×10 23","6,083×10 10","3,7",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout(() => {datos.object3D.visible = false}, 6000)
	    setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
  	});

  	venus.addEventListener('click', function (evt) {
  		var name = "Venus"
		  get_api_data(name)
		const question_ans = question_object[1].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
		console.log(q_a)
  		setTimeout( () => {set_api_data("Venus","4,869×10 24","9,28x10 11","8,87",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
  	});

    tierra.addEventListener('click', function (evt) {
    	var name = "Earth"
    	get_api_data(name)
		const question_ans = question_object[2].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Earth","5,9736×10 24","1,08321×10 12","9,780327",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	marte.addEventListener('click', function (evt) {
	    var name = "Mars"
    	get_api_data(name)
		const question_ans = question_object[3].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Mars","6,4185×10 23","1,6318×10 11","3,711",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	jupiter.addEventListener('click', function (evt) {
		var name = "Jupiter"
		get_api_data(name)
		const question_ans = question_object[4].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Jupiter","1,899×10 27","1,4313×10 15","24.79",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	saturno.addEventListener('click', function (evt) {
		var name = "Saturn"
		get_api_data(name)
		const question_ans = question_object[5].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Saturn","5,688x10 26","8,27x10 23","10,44",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	urano.addEventListener('click', function (evt) {
		var name = "Uranus"
		get_api_data(name)
		const question_ans = question_object[6].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Uranus","8,686×10 25","6,833×10 13","8,69",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	neptuno.addEventListener('click', function (evt) {
		var name = "Neptune"
		get_api_data(name)
		const question_ans = question_object[7].questions
		const q_a = question_ans[Math.floor(Math.random()*question_ans.length)]
    	setTimeout( () => {set_api_data("Neptune","1,024×10 26","6,254×10 13","11,15",q_a.q,q_a.a)}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 6000)
		setTimeout(() => {quiz_question.object3D.visible = true}, 6500)
	    setTimeout(() => {quiz_question.object3D.visible = false ;quiz_answer.object3D.visible = true}, 10000)
	    setTimeout(() => {quiz_answer.object3D.visible = false}, 14000)
	});

	tel1.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel2.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel3.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel4.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel5.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel6.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel7.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

	tel8.addEventListener('click',(evt)=>{
		var cam1 = document.querySelector('#cam1');
		var cam2 = document.querySelector('#cam2');
		const arrayOfstuff = evt.srcElement.attributes.position.nodeValue
		cam1.setAttribute('position', arrayOfstuff);
		cam2.setAttribute('position', arrayOfstuff);
	})

  	}

});
