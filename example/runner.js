var run = function() { JS.Test.autorun() }

var ROOT = JS.ENV.ROOT || '.'
JS.cache = false

JS.load(  ROOT + '/example/lib/set.js',
          ROOT + '/example/spec/set_spec.js',

          // add files here as the project grows

          run)
