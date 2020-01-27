// https://gitgraphjs.com/#8

// Options
const options = {
  orientation: 'horizontal',
  mode: 'compact', // or compact if you don't want the messages
};

// variables
let container, graph, master, feature, featureB;

// Graph 01: Master
container = document.getElementById("scenario-01");
graph = GitgraphJS.createGitgraph(container, options);
master = graph.branch('master');
master.commit(commitOptions).commit('II').commit('Three');

// Graph 02: HotFix
container = document.getElementById("scenario-02");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I').commit('II').commit('Three');

  feature = master.branch('featureA');
  feature.commit('I');
  master.merge(feature);

// Graph 03: Un cambio menor que quiere el cliente (Cambiar un texto)
container = document.getElementById("scenario-03");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I').commit('II');

  // Feature A
  feature = master.branch('featureA');
  feature.commit('I').commit('II');
  master.merge(feature);

// Graph 04: Un cambio menor que quiere el cliente (Cambiar un texto)
container = document.getElementById("scenario-04");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I').commit('II');

  // Feature A
  feature = master.branch('featureA');
  feature.commit('I').commit('II').commit('III').commit('IV').commit('V');
  master.merge(feature);

// Graph 05: Dos cambios en serie
container = document.getElementById("scenario-05");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  // Feature A
  feature = master.branch('featureA');
  feature.commit('I').commit('II');
  master.merge(feature);
  // Feature B
  feature = master.branch('featureB');
  feature.commit('III').commit('IV').commit('V');
  master.merge(feature);

// Graph 06: Dos nuevas funcionalidades en paralelo
container = document.getElementById("scenario-06");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  // Feature A
  feature = master.branch('featureA');
  featureB = master.branch('featureB');

  feature.commit('I');
  featureB.commit('II').commit('III').commit('IV').commit('V');

  master.merge(feature);
  master.merge(featureB);

// Graph 07: Una funcionalidad que es desarrollada tiene una demora
container = document.getElementById("scenario-07");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit('I').commit('II');
  featureB.commit('II').commit('III').commit('IV');
  master.merge(feature);
  master.merge(featureB);
  featureB.commit('I');
  master.merge(featureB);

// Graph 07-B
container = document.getElementById("scenario-07");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit('I').commit('II');
  featureB.commit('II').commit('III').commit('IV');
  master.merge(feature);
  master.merge(featureB);
  feature = master.branch('featureC')
  feature.commit('I');
  master.merge(feature);

// Graph 07 bis: Una funcionalidad que es desarrollada se desacarta
container = document.getElementById("scenario-07");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit('I').commit('II');
  featureB.commit('II').commit('III').commit('IV');
  master.merge(feature);
  master.merge(featureB);
  featureB.commit('I');

// Graph 08: Una tarea muy larga que no puede dividirse
container = document.getElementById("scenario-08");
master = GitgraphJS.createGitgraph(container, options).branch('master');
master.commit('I');

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  featureC = master.branch('featureC');
  feature.commit();
  featureB.commit();
  featureC.commit();
  master.merge(feature);
  featureC.merge(master);
  master.merge(featureB);
  featureC.commit();
  featureC.merge(master);
  featureC.commit();

// Graph XX: Una funcionalidad que depende de otra (una clase de un button)
// Graph XX: Una funcionaliad muy grande que dura mucho y ocupa varias iteraciIs
// Graph XX: Conflicto
// Graph XX: Cherry-Pick
// Fases de una branch

// Piero se va de vacaciones, y deja algo por la mitad. Que pasa?

/*
// Consecuencias de trabajar de esta manera:
- La reunion de sizing desaparece
- La clumna Validation del pizarron desaparece
- La columna "ready for code review" desaparece
- Una tarjeta en la columna code coreview no deberia estar mas de 15 minutos
-
*/
