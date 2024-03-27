//create success response
const sendSuccessResponse = (res,statusCode,message)=> {
    const response = {
        status:true,
        message
      }; 
    res.status(statusCode).json(response);
  }
  
  
  const sendRecordsResponse = (res,statusCode,message,data,totalCount)=> {
    const response = {
        status:true,
        message, 
        totalCount,
        data
      }; 
    res.status(statusCode).json(response);
  }
  
  
  //create error success response
  const sendErrorResponse = (res,statusCode,message,errors)=> {
    const response = {
        status:false,
        message, 
        errors
      }; 
    res.status(statusCode).json(response);
  } 
  //create error success response
  const sendNoResponse = (res,statusCode,message,errors)=> {
    const response = {
      status:true,
      message, 
      totalCount,
      data
    }; 
  res.status(statusCode).json(response);
    // res.status(200).json(response);
  } 
  module.exports = { 
      sendSuccessResponse,
      sendErrorResponse,
      sendRecordsResponse,
      sendNoResponse
  };