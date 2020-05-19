package com.thoughtworks.security.insecurity.controller;


import com.thoughtworks.security.insecurity.dto.ResultDTO;
import com.thoughtworks.security.insecurity.dto.request.PostArticleRequestDTO;
import com.thoughtworks.security.insecurity.dto.response.ArticleResponseDTO;
import com.thoughtworks.security.insecurity.entity.Article;
import com.thoughtworks.security.insecurity.service.ArticleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/article")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping("/post")
    @CrossOrigin(origins = "*")
    public ResultDTO<Article> post(@RequestBody PostArticleRequestDTO postArticleRequestDTO) {
        return articleService.post(postArticleRequestDTO);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByCreateTime() {
        return articleService.listByCreateTime();
    }

    @GetMapping("/topic")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<ArticleResponseDTO>> listByTopic(@RequestParam("topic") String topic) {
        return articleService.listByTopic(topic);
    }

    @GetMapping("/topics")
    @CrossOrigin(origins = "*")
    public ResultDTO<List<String>> listTopics() {
        return articleService.listTopics();
    }
}
