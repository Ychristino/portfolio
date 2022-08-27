package com.portfolio.portfolio.exception;

public class NotFoundException extends Exception{

    public String message;

    public NotFoundException(String message){ this.message = message; }
}
