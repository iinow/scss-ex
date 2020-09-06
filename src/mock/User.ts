import chance from 'chance'

const Mock = chance()

interface Profiles {
  name: string
  company: string
  location: string
}

const profiles: Profiles = {
  name: Mock.name(),
  company: Mock.company(),
  location: Mock.locale()
}

const provinces: string[] = [
  Mock.province(),
  Mock.province(),
  Mock.province(),
  Mock.province()
]

export default {
  profiles,
  provinces
}
