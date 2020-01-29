// https://guides.github.com/introduction/flow/
// http://scottchacon.com/2011/08/31/github-flow.html
// https://githubflow.github.io/
// https://github.com/nicoespeon/gitgraph.js/blob/master/packages/gitgraph-js/MIGRATE_FROM_GITGRAPH.JS.md
// https://gitgraphjs.com/#8
// https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf

// Options
const graphOptions = {
  template: 'metro',
  orientation: 'horizontal',
  author: 'Piero Blunda',
  mode: 'extended', // or compact
  template: GitgraphJS.templateExtend('metro', {
    branch: {
      label: {
        display: false
      }
    }
  })
};

const branchOptions = {
  style: {
    label: {
      display: false
    }
  }
};

// variables
let container, graph, master, feature, featureB;

// Graph 01: Master
container = document.getElementById('scenario-01');
master = GitgraphJS.createGitgraph(container, graphOptions).branch(branchOptions);
master.commit().commit().commit();

// Graph 02: HotFix
container = document.getElementById('scenario-02');
master = GitgraphJS.createGitgraph(container, graphOptions).branch(branchOptions);
master.commit().commit().commit();

  feature = master.branch('featureA');
  feature.commit();
  master.merge(feature);

// Graph 03: Un cambio menor que quiere el cliente (Cambiar un texto)
container = document.getElementById('scenario-03');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit().commit();

  // Feature A
  feature = master.branch('featureA');
  feature.commit().commit();
  master.merge(feature);

// Graph 03-B: Un cambio menor que quiere el cliente (Cambiar un texto)
container = document.getElementById('scenario-03B');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  // Feature A
  feature = master.branch('featureA');
  feature.commit().commit().commit().commit().commit();
  master.merge(feature);

// Graph 04: Un cambio menor que quiere el cliente (Cambiar un texto)
container = document.getElementById('scenario-04');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit().commit();

  // Feature A
  feature = master.branch('featureA');
  feature.commit().commit().commit().commit('IV').commit('V');
  master.merge(feature);

// Graph 05: Dos cambios en serie
container = document.getElementById('scenario-05');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  // Feature A
  feature = master.branch('featureA');
  feature.commit();
  master.merge(feature);
  // Feature B
  feature = master.branch('featureB');
  feature.commit().commit('IV');
  master.merge(feature);

// Graph 06: Dos nuevas funcionalidades en paralelo
container = document.getElementById('scenario-06');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  // Feature A
  feature = master.branch('featureA');
  featureB = master.branch('featureB');

  feature.commit();
  featureB.commit().commit();

  master.merge(feature);
  master.merge(featureB);

// Graph 06B: Dos nuevas funcionalidades en paralelo que dependen entre si: evite este
container = document.getElementById('scenario-06B');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  // Feature A
  feature = master.branch('featureA');
  featureB = master.branch('featureB');

  feature.commit();
  featureB.commit();
  featureB.merge(feature);
  featureB.commit();
  master.merge(feature);
  master.merge(featureB);

// Graph 06C: Dos nuevas funcionalidades en paralelo que dependen entre si: evite este
container = document.getElementById('scenario-06C');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  // Feature A
  feature = master.branch('featureA');
  featureB = master.branch('featureB');

  feature.commit();
  featureB.commit();
  featureB.merge(feature);
  feature.merge(featureB);
  master.merge(feature);
  featureB.commit();
  master.merge(featureB);

// Graph 07: Una funcionalidad que es desarrollada tiene una demora
container = document.getElementById('scenario-07');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit();
  featureB.commit().commit();
  master.merge(feature);
  master.merge(featureB);
  featureB.commit();
  master.merge(featureB);

// Graph 07-B
container = document.getElementById('scenario-07');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit();
  featureB.commit().commit();
  master.merge(feature);
  master.merge(featureB);
  feature = master.branch('featureC')
  feature.commit();
  master.merge(feature);

// Graph 07 bis: Una funcionalidad que es desarrollada se desacarta
container = document.getElementById('scenario-07');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

  feature = master.branch('featureA');
  featureB = master.branch('featureB');
  feature.commit();
  featureB.commit().commit();
  master.merge(feature);
  master.merge(featureB);
  featureB.commit();

// Graph 08: Una tarea muy larga que no puede dividirse
container = document.getElementById('scenario-08');
master = GitgraphJS.createGitgraph(container, graphOptions).branch('master');
master.commit();

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
  master.merge(featureC);

// Graph XX: Una funcionalidad que depende de otra (una clase de un button)
// Graph XX: Una funcionaliad muy grande que dura mucho y ocupa varias iteraciIs
// Graph XX: Conflicto
// Graph XX: Cherry-Pick
// Fases de una branch
// Pair programming

// Piero se va de vacaciones, y deja algo por la mitad. Que pasa?

/*
Estamos cambiando el branching model? No. En realidad estamos trabjando en horma vetical, pero explicandolo de una manera que se entiende. Si se trabaja en forma vertical se puede incluso trabajar con GitFlow, pero ya no tendria sentido alguno.
*/

/*
// Consecuencias de trabajar de esta manera:
- La reunion de sizing desaparece
- La clumna Validation del pizarron desaparece
- La columna 'ready for code review' desaparece
- Una tarjeta en la columna code coreview no deberia estar mas de 15 minutos
- El branching model se simplifica
- Como se lo que esta en production? Le pongo un tag
- La SprintPlanning desaparece como reunion, y se trandforma en un comentario del PO en la standUp meeting. Solo es neceario un objetivo.
- Las PR dejan de ser 1a1 con las user stories
- Mas deployability (mas task in done mas frecuentemente)
- Menos bugs en produccion
- Demos conflictos generados
- Commints semmanticos
- Maggior cantidad de valor agregado al producto para el cliente
- Maggior controllo dei tempi (timeboxing)
- Estilo mas cerca de Agile (mejora de la adaptacion al cambio)
- El proyecto pasa a estar dirigido por el riesgo en lugar de estar dirigido por cuestiones tecnicas
- Mas transparencia del desarrollo hacia el ProductOwner/ProductManager/ScrumMaster
-
*/
