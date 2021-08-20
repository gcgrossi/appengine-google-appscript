function getConfiguration(configkey) {

  // if private use 
  var userkey=Session.getActiveUser().getEmail();

  //if public
  //var userkey="username@gmail.com";
  
  Logger.log('User: '+userkey);
  Logger.log('Retrieving Configuration Parameter: '+configkey);


   var config = {"info@whitening-artists.com":{"database": {"folder":"Admin/db",
                                                            "file"  :"Untitled_Spreadsheet",
                                                            "sheet1": {"name":"Sheet1","columns":{"header1":"Header1"}}
                                                            } 
                                              }
                };                                 
                          
  
  return config[userkey][configkey]
  
}
