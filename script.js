const writer = document.querySelector('#typeWriter')

// função efeito maquina de escrever
//utilizei um código já pront
const texts = ['Desenvolvedor Front-end', 'Estudante de desenvolvimento Mobile', 'Designer']

function write(texts, done) {
  const char = texts.split('').reverse()
  const typer = setInterval(() => {
    if (!char.length) {
      clearInterval(typer)
      return setTimeout(done, 1500) // espera um pouco antes de apagar
    }
    const next = char.pop()
    writer.innerHTML += next
  }, 100)
}

function clear(done) {
  const char = writer.innerHTML
  let nr = char.length
  const typer = setInterval(() => {
    if (nr-- == 0) {
      clearInterval(typer)
      return done()
    }
    writer.innerHTML = char.slice(0, nr)
  }, 50)
}

function baseboard(contents) {
  let atual = -1

  function next(cb) {
    atual < contents.length - 1 ? atual++ : atual = 0

    let texts = contents[atual]
    write(texts, () => {
      clear(next)
    })
  }
  next(next)
}

baseboard(texts)