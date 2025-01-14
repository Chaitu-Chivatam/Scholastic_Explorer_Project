/*
 * @author Kamal
 * @since 2021
 * @version 1.0
 */
package com.webscraping;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WebScarpingApplication.class);
	}

}
