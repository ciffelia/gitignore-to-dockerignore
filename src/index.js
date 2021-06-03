import gitignoreToDockerignore from 'gitignore-to-dockerignore'

const inputElm = document.getElementById('input')
const outputElm = document.getElementById('output')

const update = () => {
  outputElm.value = gitignoreToDockerignore(inputElm.value)
}

inputElm.addEventListener('keyup', update)
inputElm.addEventListener('change', update)

update()
