(function() {
	var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

	NUM_CONFETTI = 350;

	COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

	PI_2 = 2 * Math.PI;

	canvas = document.getElementById("confetti");
	context = canvas.getContext("2d");

	window.w = 0;
	window.h = 0;

	resizeWindow = function() {
		window.w = canvas.width = window.innerWidth;
		return window.h = canvas.height = window.innerHeight;
	};

	window.addEventListener('resize', resizeWindow, false);

	window.onload = function() {
		return setTimeout(resizeWindow, 0);
	};

	range = function(a, b) {
		return (b - a) * Math.random() + a;
	};

	drawCircle = function(x, y, r, style) {
		context.beginPath();
		context.arc(x, y, r, 0, PI_2, false);
		context.fillStyle = style;
		return context.fill();
	};

	xpos = 0.4;

	document.onmousemove = function(e) {
		return xpos = e.pageX / w;
	};

	window.requestAnimationFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();

	Confetti = (function() {
		function Confetti() {
			this.style = COLORS[~~range(0, 5)];
			this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
			this.r = ~~range(2, 6);
			this.r2 = 2 * this.r;
			this.replace();
		}

		Confetti.prototype.replace = function() {
			this.opacity = 0;
			this.dop = 0.03 * range(1, 4);
			this.x = range(-this.r2, w - this.r2);
			this.y = range(-20, h - this.r2);
			this.xmax = w - this.r;
			this.ymax = h - this.r;
			this.vx = range(0, 2) + 8 * xpos - 5;
			return this.vy = 0.7 * this.r + range(-1, 1);
		};

		Confetti.prototype.draw = function() {
			var _ref;
			this.x += this.vx;
			this.y += this.vy;
			this.opacity += this.dop;
			if (this.opacity > 1) {
				this.opacity = 1;
				this.dop *= -1;
			}
			if (this.opacity < 0 || this.y > this.ymax) {
				this.replace();
			}
			if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
				this.x = (this.x + this.xmax) % this.xmax;
			}
			return drawCircle(~~this.x, ~~this.y, this.r, "" + this.rgb + "," + this.opacity + ")");
		};

		return Confetti;

	})();

	confetti = (function() {
		var _i, _results;
		_results = [];
		for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
			_results.push(new Confetti);
		}
		return _results;
	})();

	window.step = function() {
		var c, _i, _len, _results;
		requestAnimationFrame(step);
		context.clearRect(0, 0, w, h);
		_results = [];
		for (_i = 0, _len = confetti.length; _i < _len; _i++) {
			c = confetti[_i];
			_results.push(c.draw());
		}
		return _results;
	};

	step();

}).call(this);

var clock;
var $clock = $('.clock');
var $message = $('.message');
var $confetti = $('#confetti');
var animations = ['bounce', 'pulse', 'rubberBand', 'swing', 'tada'];
var current_animation = 0;
var timeout = null;
var interval = 10000;

$(document).ready(function() {
    var currentDate = new Date();
    
    // Verifica si es diciembre
    if (currentDate.getMonth() === 11) { // Diciembre es el mes 11
        var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1); // 1 de enero del siguiente año
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        clock = $clock.FlipClock(diff, {
            clockFace: 'DailyCounter',
            countdown: true,
            callbacks: {
                interval: function() {
                    var time = this.factory.getTime().time;
                    if(time <= 10 && time > 0) {
                        pulse();
                    }
                    else if(time <= 0) {
                        celebrate();
                    }
                }
            }
        });
    } else {
        // Si no es diciembre, muestra el mensaje de feliz año nuevo
        $message.html("<div style='font-size: 120px; font-weight: bold;'>¡Feliz Año Nuevo 2026!</div><div style='font-size: 60px; color: gray;'>Que este nuevo año traiga alegría, amor y muchas bendiciones</div>").fadeIn();
        $clock.hide(); // Opcional: oculta el contador
    }
});

function celebrate()
{
    $confetti.fadeIn();
    
    $clock.removeClass('animated flipInX');
    $clock.addClass('animated flipOutX');

    clearTimeout(timeout);
    setTimeout(function() {
        $message.addClass('animated flipInX').fadeIn();
        timeout = setTimeout(bounce, interval);
    }, 350);
}


function pulse()
{
	$clock.removeClass('animated flipInX flipOutX pulse');

	clearTimeout(timeout);
	timeout = setTimeout(function(){
		$clock.addClass('animated pulse');
	}, 50);
}

function bounce()
{
	clearTimeout(timeout);
	
	$message.removeClass('animated bounce flipInX pulse rubberBand swing tada');
	
	setTimeout(function(){ 
		$message.addClass('animated ' + animations[current_animation]);
		current_animation++;
		if(current_animation == animations.length)
		{
			current_animation = 0;
		}
	}, 100);
	
	timeout = setTimeout(bounce, interval);
}
// Función para obtener el tiempo del servidor y iniciar el contador
fetch('http://worldtimeapi.org/api/timezone/Etc/UTC')
  .then(response => response.json())
  .then(data => {
    // Obtener la hora actual del servidor
    let now = new Date(data.utc_datetime).getTime();
    startCountdown(now);
  });

function startCountdown(now) {
    // Fecha de cuenta regresiva
    let countdownDate = new Date("Jan 1, 2026 00:00:00").getTime();

    let x = setInterval(function() {
      // Calcular la distancia
      let distance = countdownDate - now;

      // Calcular días, horas, minutos y segundos
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizar el elemento con el contenedor del contador
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // Incrementar 'now' cada segundo
      now += 1000;

      // Comprobar si la cuenta regresiva ha terminado
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Feliz Año Nuevo 2026!";
      }
    }, 1000);
}
