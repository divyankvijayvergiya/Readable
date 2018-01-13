import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Row, Col, List, Button, Input} from 'antd';
import { deleteComment, editComment } from '../actions/comments';
import { calculateDate } from '../utils/helper';
