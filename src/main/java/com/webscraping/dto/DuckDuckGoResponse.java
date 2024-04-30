package com.webscraping.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DuckDuckGoResponse {
	
	@JsonProperty("Abstract")
	private String Abstract;
	
	@JsonProperty("AbstractSource")
	private String AbstractSource;
	
	@JsonProperty("AbstractText")
	private String AbstractText;
	
	private String AbstractURL;
	
	private String Answer;
	
	private String AnswerType;
	
	private String Definition;
	
	private String DefinitionSurce;
	
	private String DefinitionURL;
	
	private String Entity;
	
	private String Heading;
	
	private String Image;
	
	private Integer ImageHeight;
	
	private Integer ImageIsLogo;
	
	private Integer ImageWidth;
	
	private String Infobox;
	
	private String Redirect;
	
	private String Type;
	
	@JsonProperty("RelatedTopics")
	private List<DuckDuckGoRelatedTopic> RelatedTopics; 
	
}
