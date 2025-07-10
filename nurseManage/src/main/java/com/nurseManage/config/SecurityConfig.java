package com.nurseManage.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(
                                                                "/api/nurses/**",
                                                                "/api/patients/**",
                                                                "/api/admin/**",
                                                                "/api/msg/**",
                                                                "/public/**",
                                                                "/login")
                                                .permitAll()
                                                .anyRequest().authenticated())
                                .formLogin(form -> form
                                                .loginPage("/login").permitAll())
                                .logout(logout -> logout
                                                .logoutSuccessUrl("/login?logout").permitAll());

                return http.build();
        }
}
