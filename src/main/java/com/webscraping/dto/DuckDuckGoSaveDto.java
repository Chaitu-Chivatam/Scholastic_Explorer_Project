package com.webscraping.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DuckDuckGoSaveDto {
	
	@JsonProperty("FirstURL")
	private String FirstURL;
	
	@JsonProperty("Text")
	private String Text;

}
