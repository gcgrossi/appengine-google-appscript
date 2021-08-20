function doGet(e) {
  var page = e.parameter['page'];
  
  if (!page) {
    return HtmlService.createTemplateFromFile("Home").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  return loadForm(page);
}


function loadForm(form_name){
  return HtmlService.createTemplateFromFile(form_name).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);  
}

function getScriptUrl() {
  
  // when deploying should be set to false
  // when testing should be set to true
  var isdev = true

  // domain should be specified here
  var domain = '<put_domain_here>';
  
  var deploymentUrl = ScriptApp.getService().getUrl();
  Logger.log('deployment url:')
  Logger.log(deploymentUrl);
  
  var deployment_url = deploymentUrl.split('/');
  var l = deployment_url.length
  Logger.log(deployment_url)
  
  // the deployment id is and the deployment mode (exec/dev)
  // are the last to component 
  var id = deployment_url[l-2]
  var mode = deployment_url[l-1]

  // if I'm in dev mode should modify id and mode accordingly.
  // This is a bug of GAS. The correct url should be returned
  // by getService().getUrl()
  if (isdev) {
    id = '<put_id_here>'
    mode = 'dev' 
  }

  var url =[ 'https:',
  '',
  'script.google.com',
  'a',
  'macros',
  domain,
  's',
  id,
  mode]

  console.log('constructed url:')
  console.log(url.join('/'))
  return url.join('/')
}
