package com.webscraping.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DuckDuckGoRelatedTopic {

	@JsonProperty("FirstURL")
	private String FirstURL;

	@JsonProperty("Result")
	private String Result;

	@JsonProperty("Icon")
	private DuckDuckGoIcon Icon;

	@JsonProperty("Text")
	private String Text;

	@JsonProperty("Name")
	private String Name;

}
