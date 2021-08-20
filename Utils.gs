//*********************** Database Manipulation Utils

function getDataBase_Spreadsheet(config_key){
  //retrieves a spreadsheet stored in the configuration dictionary
 
  var config_dict = getConfiguration(config_key)

  var dbfolder_path   = config_dict["folder"];
  var dbfile_name     = config_dict["file"];
  
  var db_folder = getFolderByPath(dbfolder_path);
  var db_file =getFileInFolder(db_folder,dbfile_name);
  
  var db_fileid = db_file.getId();
  var db_ss = SpreadsheetApp.open(DriveApp.getFileById(db_fileid));
  
  return db_ss;
}

function getDataBase_Sheet(sheet_name,config_key){
 
  var db = getDataBase_Spreadsheet(config_key);
  var sheet = db.getSheetByName(sheet_name);
  
  if(!sheet){Logger.log("ERROR: could not find sheet: "+name)}
 
  return sheet;
}

function getDataBaseHeaders(name){
 
  var sheet = getDataBaseSheet(name);
  var h = getHeaderList(sheet);
  
  return h;
}

//*********************** Sheet Manipulation Utils

function getHeaderList(sheet){
 
  var data = sheet.getDataRange().getValues();
  var h    = data[0];
  
  return h;
}
 
function getHeaderIndex(sheet,col_name){
 
  var h    = getHeaderList(sheet);
  var idx  = h.indexOf(col_name);
  
  return idx;
}


//************************ Spreadsheet Manipulation Utils

function getSpreadSheetIdByName(name) {
 
  //Search the file by name in the Drive Folder
  var file_tofind = DriveApp.getFilesByName(name);
 
  while(file_tofind.hasNext()){
    var file_found = file_tofind.next();
    var id_found=file_found.getId();
    Logger.log('found file: '+name+' -- with id: '+id_found);
   };
   
  return id_found;
 
}

function getSpreadSheetByName(name) {
   
  //Search the file by name in the Drive Folder
  var file_tofind = DriveApp.getFilesByName(name);
 
  while(file_tofind.hasNext()){
    var file_found = file_tofind.next();
    var id_found=file_found.getId();
    Logger.log('found file: '+name+' -- with id: '+id_found);
   };
  
  if(!file_found){Logger.log('ERROR: could not find file: '+name);}
  
  var ss = SpreadsheetApp.open(DriveApp.getFileById(id_found));
  return ss;
  
}

//************************ File Manipulation Utils

function getFileInFolder(folder,filename){
   
 var file_tofind = folder.getFilesByName(filename);
  
  while(file_tofind.hasNext()){
    var file_found = file_tofind.next();
    var id_found=file_found.getId();
    Logger.log('found file: '+filename+' -- with id: '+id_found);
   };
  
  return file_found;
  
}

//************************ Folder Manipulation Utils

function getFolderByPath(folderpath){
  
  Logger.log('Retrieving folder: '+folderpath)
  var userfolder_name = folderpath.split("/");
  
  var folder_tofind = [];
  folder_tofind.push(DriveApp.getFoldersByName(userfolder_name[0]));
  
  for (var i=0; i<userfolder_name.length-1; ++i){
    while(folder_tofind[i].hasNext()){
      var user_folder = folder_tofind[i].next();  
    }
    folder_tofind.push(user_folder.getFoldersByName(userfolder_name[i+1]));
  }
  
  var folder_out = folder_tofind[folder_tofind.length-1].next();
  Logger.log('Found folder: '+ folder_out);
  
  return folder_out;

}
