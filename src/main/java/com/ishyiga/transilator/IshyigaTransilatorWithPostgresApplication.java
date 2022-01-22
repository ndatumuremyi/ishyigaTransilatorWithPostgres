package com.ishyiga.transilator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableJpaAuditing
public class IshyigaTransilatorWithPostgresApplication {

	public static void main(String[] args) {
		SpringApplication.run(IshyigaTransilatorWithPostgresApplication.class, args);
	}
	@Configuration
    public class CorsConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {

            registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD");
                    

        }

    }

}
