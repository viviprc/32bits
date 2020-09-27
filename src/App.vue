<template>
  <div id="app">
    <div>
      <b-navbar class="d-flex justify-content-center" type="dark" variant="dark">
        <b-navbar-nav>
          <router-link class="text-white px-2" to="/">Inicio</router-link> 
          <router-link class="text-white px-2" to="/busquedas">Búsquedas</router-link> 
          <router-link class="text-white px-2" to="/ventas">Ventas</router-link> 
          <router-link class="text-white px-2" to="/total">Total</router-link>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>
<style lang="css">
#app{
  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0HDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxMTITEhMSk3Li46Fx8zODMtNyg5LjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAK4BIgMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAaEAEBAQEBAQEAAAAAAAAAAAAAAgEREgMT/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APR4OYbhuATMNmGzDZIFzD5Jsk8yBZlSYNMqzIFmVZk0yrMAWYVmDxC0wCcwrMKTCs/MEsg+fNefmfPmCGfMfzdOfMfzBy/m35uvwHgHHvzLvzdu/Mm/MHDUJ1Dur5pV8wcNQlUO6oSqAcNSlUu24RqAclSlUuupSqQclSTcdNSlUghuF3FqkmyCW4HFNwNwE+CbywLZI8UyRyQJmGyT5J8kCTKkyaZUmQCZUmRmVYgGiFogYlaIAIhaINELRAFmFpg0wtMAnMHyFZg+SCWQbwrkm8gh4bwv5byDm2CbDq2S7IOSoSqHbUJVAOGoRuHdUI3AOG4QuHfcIXIOG4SqXZco3IOSpSqXVUp1IOXZJsumpT2Qc+4XZX2S+QR4yvlgXyTZKnkckCZJ8k2SfJAuSpMjMqzIBMrRLRK0SDRK8SESvEgMSvEhErxINEqTIzikyAZJ8kcw+YBckfJ8weAn5bypxuAjsl2V9wu4Dn2SVLo3E6wHLUI3LsqUbkHHcue5d1yhcg4rlC5dlyjcg46lKpddSjUg5tklS6KkmyDn2SbDo2S7IIeWW8sDo8jkqZI5IEyTZJ8k+SBZlSZNMqTINMrRITK0yAxK8SWJWjANErThYxWcA04pmFnFMwBzDZjZg4DcHjCANwWAvA3DBoJ7hKxXS1gIViVY6KxKsBzXKFy67xC8ByXKFy7LxC5ByVKVS6qlKpBy1JNl01KeyDn2S7K+yXZBHyynlgdXkclTJNkgnknyTZJ8kC5KkyOSeZAZxWZCcVnANOLThJxaMA04rOElSQNOKYWT4A4IYOALMwMzMDAIAXS6fS6Cep1itJ0CNYjWOisSrAc1YjeOmsSrActSlUumpSqQc9SnsunZJsg59kmy6NkuyCHllvIg6MkfKnk3kE8k2YfJNmATJUzByT5gNOKTgZik4BpxWcJOKYBpUwkqYB8NhcNgGxsDBAWZgZmYGAQANLpi6BdT1TSaCVJ1itEoEKxKsXrE6wHPWJ1LorE6kHPuE2XRuE2QQ2S+V9kPII+WU8sDq8jkq8bgJ5I5KnByQJmGzDZhswAzDzjZh8wBzD4GGwDYfCYfAPhsJhgMIMBmBgFgYGZgBtLohoF0mn0mgTSafS6CVYnWLbhNwEdwm4tuF3AQ2S+V9wu4CGyGyvwvkEfIq+WB0ZLeVPI+QT4PD+R8gTMNkm4PALmGzBzB4DYbAzDZgDhsDBwDYYuCBhKICIMAsDAzAwMXRDQDSabQ0CaXcPpdwCbhdw+4G4Ce4XcV3C7gJbgbKuyHkEdlvK3kPIJeWU4IK+R4bjcAvG4fg8AnG4fjcAvB4bjAHBzB4PAYWEGwWYBEGAWAQZmYGBmBgEADSmAC6BgAm4Gn43AT4HFOBwE+NxTgcAnA3D8bgJ8ZTjArxuKcDgE43D8bgF43DcHgE4PDcbgF4PDcbgFEeNwAFuCACzAzMwMzMDALADcZgDgcNxuAXgcPwOATjcPxuAn5bhw4BeBw/G4BON5PxuAn5ZTjApxuG43ALxuG43AKxuNwCtw3G4BeMbjcAGHjcAGHjcAGHjADCwAwsAMLADCwBwDBwAYeNwAbhg4BeNw3G4BeNw3G4BeNw3G4BeMbjA//2Q==');
  background-position: center;
  background-size: cover;
}
  
</style>


